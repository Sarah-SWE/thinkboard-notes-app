import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import "dotenv/config";

// allow 60 requests per minute per client
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(60, "1 m"),
});

export default ratelimit;