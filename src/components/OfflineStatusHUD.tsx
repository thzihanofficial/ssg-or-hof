import React, { useState, useEffect } from 'react';
import { useOfflineSync } from '../services/offlineCache';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { WifiOff, Download, CheckCircle2, RefreshCw, X, HardDriveDownload } from 'lucide-react';

export const OfflineStatusHUD: React.FC = () => {
  const { isOnline, isSyncing, syncedCount, totalCount, isFullyCached, triggerManualSync } = useOfflineSync();
  const { isInstallable, isInstalled, install, isIOS } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);
  const [showIOSHint, setShowIOSHint] = useState(false);

  // Auto-show HUD if offline or if syncing
  useEffect(() => {
    if (!isOnline) {
      setDismissed(false);
    }
  }, [isOnline]);

  const progressPercent = totalCount > 0 ? Math.min(100, Math.round((syncedCount / totalCount) * 100)) : 0;

  // If online, fully cached, not syncing, and not installable (or already installed) -> don't clutter the screen
  if (isOnline && isFullyCached && !isSyncing && !isInstallable && !dismissed) {
    return null;
  }

  if (dismissed && isOnline) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-[420px] w-[calc(100vw-32px)] font-mono text-xs select-none animate-fade-in">
      {/* Offline Alert Banner */}
      {!isOnline && (
        <div className="border-3 border-amber-400 bg-black text-white p-3.5 shadow-[5px_5px_0px_0px_#f59e0b] mb-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-amber-400/20 border border-amber-400 text-amber-300 animate-pulse">
              <WifiOff className="w-4 h-4" />
            </div>
            <div>
              <span className="font-black text-amber-300 block uppercase tracking-wide">
                OFFLINE MODE ACTIVE
              </span>
              <span className="text-[11px] text-white/80">
                Running 100% from browser cache (A to Z available)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Syncing Progress or Install Card */}
      {(isSyncing || (!isFullyCached && isOnline) || (isInstallable && !isInstalled)) && (
        <div className="border-3 border-white bg-black/95 text-white p-3.5 shadow-[5px_5px_0px_0px_#2997ff] backdrop-blur-md">
          <div className="flex items-start justify-between gap-2 border-b border-white/20 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 ${isSyncing ? 'bg-[#2997ff] animate-ping' : 'bg-emerald-400'}`} />
              <span className="font-black text-white uppercase tracking-wider text-[11px]">
                {isSyncing 
                  ? 'CACHING FULL APP FOR OFFLINE USE' 
                  : isFullyCached 
                    ? 'OFFLINE VAULT SYNCHRONIZED' 
                    : 'OFFLINE ARCHIVE READY'}
              </span>
            </div>
            <button 
              onClick={() => setDismissed(true)}
              className="text-white/60 hover:text-white p-0.5 cursor-pointer"
              aria-label="Dismiss notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Progress Bar when caching */}
          {isSyncing && (
            <div className="space-y-1.5 my-2">
              <div className="flex justify-between text-[10px] text-white/70">
                <span>Saving assets & 36 missions:</span>
                <span className="text-[#2997ff] font-bold">{progressPercent}% ({syncedCount}/{totalCount})</span>
              </div>
              <div className="w-full bg-white/10 h-2 border border-white/30 overflow-hidden">
                <div 
                  className="bg-[#2997ff] h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Fully Cached Confirmation */}
          {!isSyncing && isFullyCached && (
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 my-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>All 36 missions, audio logs, & 3D models stored locally.</span>
            </div>
          )}

          {/* Action Row: Install App / Manual Sync */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            {isInstallable && (
              <button
                onClick={install}
                className="inline-flex items-center gap-1.5 bg-[#2997ff] text-black hover:bg-white px-2.5 py-1 text-[11px] font-black uppercase border border-white shadow-[2px_2px_0px_#ffffff] transition-all cursor-pointer"
              >
                <HardDriveDownload className="w-3.5 h-3.5 text-black" />
                <span>INSTALL APP</span>
              </button>
            )}

            {isIOS && !isInstalled && (
              <button
                onClick={() => setShowIOSHint(!showIOSHint)}
                className="text-[10px] text-[#2997ff] underline cursor-pointer"
              >
                Install on iOS Safari
              </button>
            )}

            {!isSyncing && !isFullyCached && isOnline && (
              <button
                onClick={() => triggerManualSync()}
                className="inline-flex items-center gap-1 text-[10px] text-white/80 hover:text-[#2997ff] border border-white/30 bg-white/5 px-2 py-0.5"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Cache Now</span>
              </button>
            )}
          </div>

          {/* iOS Safari Installation Guide */}
          {showIOSHint && (
            <div className="mt-2.5 pt-2 border-t border-white/20 text-[10px] text-white/80 space-y-1">
              <div>To install on iPhone/iPad:</div>
              <div className="text-[#2997ff]">1. Tap Safari's Share button (square with arrow)</div>
              <div className="text-[#2997ff]">2. Select "Add to Home Screen"</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
