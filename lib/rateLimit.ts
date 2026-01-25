import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 attempts
  duration: 15 * 60, // Per 15 minutes
});

export const checkRateLimit = async (key: string) => {
  try {
    await rateLimiter.consume(key);
    return { allowed: true };
  } catch (rejRes) {
    return { allowed: false };
  }
};
