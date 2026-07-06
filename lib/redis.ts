import { Redis } from '@upstash/redis';

export const redis = Redis.fromEnv();

/**
 * Fetch from Redis cache, or run `fetcher()` on a miss and cache the result.
 * ttlSeconds: how long the value stays cached before the next request
 * re-fetches from Neon.
 */
export async function getCached<T>(
  key: string,
  ttlSeconds: number,
  fetcher: () => Promise<T>
): Promise<T> {
  try {
    const cached = await redis.get<T>(key);
    if (cached !== null && cached !== undefined) return cached;
  } catch {
    // Redis unreachable — fall through and hit Neon directly
    // rather than failing the whole page.
  }

  const fresh = await fetcher();

  try {
    await redis.set(key, fresh, { ex: ttlSeconds });
  } catch {
    // Caching failed — not fatal, the page still has fresh data.
  }

  return fresh;
}