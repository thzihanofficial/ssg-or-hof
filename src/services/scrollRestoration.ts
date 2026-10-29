/**
 * Solar System Graveyard - Global Scroll Restoration Service
 * 
 * App Rule:
 * "user kono page theke back korle se previous page e je jaigai chilo se jaigai auto scroll hoye jabe"
 * 
 * Automatically tracks and saves scroll position for every page/route.
 * Whenever the user navigates back (via browser back or in-app back buttons),
 * the previous page automatically and smoothly scrolls back to the exact location.
 */

const STORAGE_KEY = 'solarsystem_scroll_positions';

// Memory cache for instantaneous synchronous lookups
const scrollMap = new Map<string, number>();

// Back navigation tracking
let isBackAction = false;
let isInitialized = false;

/**
 * Normalizes route hashes so variations like '', '#', '#/' map consistently to 'home'
 */
export function normalizeHash(hash: string): string {
  if (!hash || hash === '#' || hash === '#/') return 'home';
  return hash.replace(/\/$/, '').toLowerCase();
}

/**
 * Saves current scroll position for a given route
 */
export function saveScrollPosition(route: string, scrollY: number): void {
  const key = normalizeHash(route);
  const y = Math.max(0, Math.round(scrollY));
  scrollMap.set(key, y);

  try {
    const obj: Record<string, number> = {};
    scrollMap.forEach((val, k) => {
      obj[k] = val;
    });
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Retrieves the saved scroll position for a given route, if any
 */
export function getSavedScrollPosition(route: string): number | null {
  const key = normalizeHash(route);
  if (scrollMap.has(key)) {
    return scrollMap.get(key)!;
  }
  return null;
}

/**
 * Flags the next route transition as an explicit BACK navigation.
 * Call this when user clicks an in-app "Back" button.
 */
export function markBackNavigation(): void {
  isBackAction = true;
}

/**
 * In-app back navigation handler.
 * Flags back navigation and navigates to the previous page / fallback.
 */
export function navigateBack(fallbackHash: string = ''): void {
  isBackAction = true;

  // If there is history to go back to, use window.history.back()
  if (typeof window !== 'undefined') {
    const currentHash = normalizeHash(window.location.hash);
    const targetHash = normalizeHash(fallbackHash);

    // If browser history has previous states, pop back
    if (window.history.length > 1) {
      window.history.back();

      // Ensure fallback in case history was external or unchanged
      setTimeout(() => {
        if (normalizeHash(window.location.hash) === currentHash) {
          window.location.hash = fallbackHash;
        }
      }, 120);
    } else {
      window.location.hash = fallbackHash;
    }
  }
}

/**
 * Checks and consumes the back action flag
 */
export function consumeBackAction(): boolean {
  const wasBack = isBackAction;
  isBackAction = false;
  return wasBack;
}

/**
 * Peek whether the current transition is a back action
 */
export function isBackNavigation(): boolean {
  return isBackAction;
}

/**
 * Initializes listeners for window scrolling, popstate, and storage hydration.
 */
export function initScrollRestoration(): () => void {
  if (typeof window === 'undefined' || isInitialized) {
    return () => {};
  }
  isInitialized = true;

  // Instruct browser not to interfere with our custom scroll restoration
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  // Hydrate cache from sessionStorage
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        Object.entries(parsed).forEach(([k, v]) => {
          if (typeof v === 'number') {
            scrollMap.set(k, v);
          }
        });
      }
    }
  } catch {
    // Ignore hydration errors
  }

  // Continuously record scroll position (throttled to AnimationFrame)
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const route = normalizeHash(window.location.hash);
        if (route) {
          saveScrollPosition(route, window.scrollY);
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  // Browser Back/Forward navigation triggers popstate
  const onPopState = () => {
    // Any browser popstate in hash-based SPA represents back/forward navigation
    isBackAction = true;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('popstate', onPopState);

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('popstate', onPopState);
    isInitialized = false;
  };
}

/**
 * Restores the saved scroll position for targetHash with multi-phase layout retries.
 * Returns true if a position was restored, false otherwise.
 */
export function restoreScroll(targetHash: string, force = false): boolean {
  if (typeof window === 'undefined') return false;

  const key = normalizeHash(targetHash);
  const savedY = getSavedScrollPosition(key);

  // If back action or force requested, and we have a position > 0:
  if ((isBackAction || force) && savedY !== null && savedY > 0) {
    consumeBackAction();

    // Multi-phase scroll restoration:
    // When a React component mounts, its height grows over 10-200ms
    // as images, fonts, and sub-components render.
    // Repeating scrollTo across RAF and timeouts ensures the window
    // lands on the exact pixel without getting clamped to 0.
    window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior });

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior });
    });

    const timers = [
      setTimeout(() => window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior }), 40),
      setTimeout(() => window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior }), 100),
      setTimeout(() => window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior }), 200),
      setTimeout(() => window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior }), 350),
    ];

    return true;
  }

  // Not a back restoration or no saved position: start at top
  consumeBackAction();
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  return false;
}
