import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import "dotenv/config";

// create a ratelimiter that allow 100 requests per 20s
const ratelimit= new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(10,'20 s')

})

export default ratelimit;