import { useState, useEffect, useCallback } from 'react';
import { registerSW } from 'virtual:pwa-register';
import { 
  OFFLINE_CACHE_NAME, 
  ALL_OFFLINE_RESOURCES 
} from '../data/offlineAssets';

const SYNC_STORAGE_KEY = 'ssg_offline_synced_v2';

// Register the PWA service worker automatically with immediate reload prompt capability
export const initServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    registerSW({
      immediate: true,
      onNeedRefresh() {
        // silently update in background
      },
      onOfflineReady() {
        // silently ready
      },
      onRegisterError(error) {
        console.warn('[PWA] Service worker error:', error);
      }
    });

    // 100% Silent Background Pre-caching:
    // User does not see any HUD or prompt. It quietly downloads and caches in the background.
    const startSilentWarmup = () => {
      checkCacheStatus()
        .then(({ isReady }) => {
          if (!isReady && navigator.onLine) {
            startBackgroundCacheWarmup();
          }
        })
        .catch(() => {});
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(startSilentWarmup, { timeout: 3000 });
    } else {
      setTimeout(startSilentWarmup, 1500);
    }
  }
};

interface SyncProgress {
  isOnline: boolean;
  isSyncing: boolean;
  syncedCount: number;
  totalCount: number;
  isFullyCached: boolean;
  errorCount: number;
}

// Global subscribers for sync progress
type SyncListener = (state: SyncProgress) => void;
const listeners = new Set<SyncListener>();

let globalState: SyncProgress = {
  isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
  isSyncing: false,
  syncedCount: 0,
  totalCount: ALL_OFFLINE_RESOURCES.length,
  isFullyCached: false,
  errorCount: 0
};

const notifyListeners = () => {
  listeners.forEach(fn => fn({ ...globalState }));
};

// Check which assets are already stored in CacheStorage
export const checkCacheStatus = async (): Promise<{ cached: number; total: number; isReady: boolean }> => {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return { cached: 0, total: ALL_OFFLINE_RESOURCES.length, isReady: false };
  }

  try {
    const cache = await caches.open(OFFLINE_CACHE_NAME);
    let cachedCount = 0;

    for (const url of ALL_OFFLINE_RESOURCES) {
      const match = await cache.match(url);
      if (match) {
        cachedCount++;
      }
    }

    const isReady = cachedCount >= Math.floor(ALL_OFFLINE_RESOURCES.length * 0.95);
    return { cached: cachedCount, total: ALL_OFFLINE_RESOURCES.length, isReady };
  } catch (err) {
    console.warn('[OfflineCache] Check cache failed:', err);
    return { cached: 0, total: ALL_OFFLINE_RESOURCES.length, isReady: false };
  }
};

// Background batch fetch and store into CacheStorage
export const startBackgroundCacheWarmup = async (concurrency = 4): Promise<void> => {
  if (typeof window === 'undefined' || !('caches' in window) || globalState.isSyncing) {
    return;
  }

  globalState.isSyncing = true;
  notifyListeners();

  try {
    const cache = await caches.open(OFFLINE_CACHE_NAME);
    const queue = [...ALL_OFFLINE_RESOURCES];
    let synced = 0;
    let errors = 0;

    const processItem = async (url: string) => {
      try {
        // Check if already in cache
        const existing = await cache.match(url, { ignoreSearch: true });
        if (existing) {
          synced++;
          globalState.syncedCount = synced;
          notifyListeners();
          return;
        }

        // Fetch using cors mode or no-cors for external domains
        const response = await fetch(url, {
          mode: url.startsWith('http') ? 'cors' : 'same-origin',
          cache: 'force-cache'
        }).catch(async () => {
          // Fallback with no-cors if CORS is restricted on opaque CDNs
          if (url.startsWith('http')) {
            return await fetch(url, { mode: 'no-cors', cache: 'force-cache' });
          }
          throw new Error('Fetch failed');
        });

        if (response && (response.ok || response.type === 'opaque')) {
          await cache.put(url, response);
          synced++;
        } else {
          errors++;
        }
      } catch {
        errors++;
      } finally {
        globalState.syncedCount = synced;
        globalState.errorCount = errors;
        notifyListeners();
      }
    };

    // Also warm up hero background video into hero-video-vault-v1
    const videoUrl = 'https://v1.pinimg.com/videos/iht/expMp4/11/09/56/110956ca69b4a3a36bdbee450c531685_720w.mp4';
    try {
      const vidCache = await caches.open('hero-video-vault-v1');
      const hasVid = await vidCache.match(videoUrl);
      if (!hasVid) {
        fetch(videoUrl, { mode: 'cors' })
          .then((res) => {
            if (res.ok) vidCache.put(videoUrl, res);
          })
          .catch(() => {});
      }
    } catch {}

    // Process in batches with concurrency limit
    const running: Promise<void>[] = [];
    for (const url of queue) {
      const p = processItem(url).then(() => {
        running.splice(running.indexOf(p), 1);
      });
      running.push(p);
      if (running.length >= concurrency) {
        await Promise.race(running);
      }
    }
    await Promise.all(running);

    globalState.isFullyCached = synced >= Math.floor(ALL_OFFLINE_RESOURCES.length * 0.9);
    if (globalState.isFullyCached) {
      try {
        localStorage.setItem(SYNC_STORAGE_KEY, 'true');
      } catch {}
    }
  } catch (err) {
    console.warn('[OfflineCache] Background warmup encountered issue:', err);
  } finally {
    globalState.isSyncing = false;
    notifyListeners();
  }
};

// React hook for observing offline status and cache progress
export const useOfflineSync = () => {
  const [state, setState] = useState<SyncProgress>(globalState);

  useEffect(() => {
    // Sync initial state
    setState(globalState);

    const handleUpdate = (newState: SyncProgress) => {
      setState(newState);
    };

    listeners.add(handleUpdate);

    // Online / Offline listeners
    const handleOnline = () => {
      globalState.isOnline = true;
      notifyListeners();
    };

    const handleOffline = () => {
      globalState.isOnline = false;
      notifyListeners();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Verify initial cache status on mount
    checkCacheStatus().then(({ cached, total, isReady }) => {
      globalState.syncedCount = cached;
      globalState.totalCount = total;
      globalState.isFullyCached = isReady;
      notifyListeners();

      // If not yet fully cached and browser is online, launch background warmup automatically
      if (!isReady && navigator.onLine && !globalState.isSyncing) {
        // Schedule after idle or small delay so initial page render is instantaneous
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => {
            startBackgroundCacheWarmup();
          }, { timeout: 3000 });
        } else {
          setTimeout(() => {
            startBackgroundCacheWarmup();
          }, 1500);
        }
      }
    });

    return () => {
      listeners.delete(handleUpdate);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const triggerManualSync = useCallback(() => {
    return startBackgroundCacheWarmup();
  }, []);

  return {
    ...state,
    triggerManualSync
  };
};
