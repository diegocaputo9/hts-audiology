/** Presentation state only: deliberately kept in memory, never in browser storage. */
const seen = new Set<string>();
const resetListeners = new Set<() => void>();
const awayLimit = 30 * 60 * 1000;
let hiddenAt: number | null = null;
let installed = false;

export function subscribeHeadingMemory(reset: () => void) {
  if (!installed) {
    installed = true;
    hiddenAt = document.visibilityState === 'hidden' ? Date.now() : null;
    // One document-lifetime listener; component callbacks are removed on unmount.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') { hiddenAt = Date.now(); return; }
      const expired = hiddenAt !== null && Date.now() - hiddenAt >= awayLimit;
      hiddenAt = null;
      if (expired) { seen.clear(); resetListeners.forEach(listener => listener()); }
    });
  }
  resetListeners.add(reset);
  return () => { resetListeners.delete(reset); };
}
export const headingWasSeen = (key: string) => seen.has(key);
export const rememberHeading = (key: string) => { seen.add(key); };
