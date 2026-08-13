interface Entry {
  count: number;
  resetAt: number;
}

const windowMs = 15 * 60 * 1000;
const maxRequests = 5;
const entries = new Map<string, Entry>();

function prune(now: number): void {
  entries.forEach((entry, key) => {
    if (entry.resetAt <= now) {
      entries.delete(key);
    }
  });
}

export function consumeContactRequest(
  key: string,
  now = Date.now(),
): { allowed: true } | { allowed: false; retryAfterSeconds: number } {
  prune(now);
  const current = entries.get(key);
  if (!current || current.resetAt <= now) {
    entries.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }
  if (current.count >= maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }
  current.count += 1;
  return { allowed: true };
}