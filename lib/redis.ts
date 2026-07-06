import { Redis } from '@upstash/redis';

export const redis = Redis.fromEnv();

/**
 * Fetch from cache, or run `fetcher()` and cache the result.
 * ttlSeconds: how long to keep it before re-fetching from Neon.
 */
export async function getCached<T>(
  key: string,
  ttlSeconds: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const cached = await redis.get<T>(key);
  if (cached !== null) return cached;

  const fresh = await fetcher();
  await redis.set(key, fresh, { ex: ttlSeconds });
  return fresh;
}