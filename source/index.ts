
import type { Options as PRetryOptions } from "p-retry";
import pRetry from "p-retry";

export type Options = PRetryOptions & {
  /**
   * The number of milliseconds to wait before logging a warning.
   */
  heartbeat?: number;
  /**
   * A callback that is called every `heartbeat` milliseconds until the operation completes.
   * @param elapsed The number of milliseconds since the start of the operation
   */
  onHeartbeat?: (elapsed: number) => void;
}

export default async function retry<T>(promise: (Promise<T> | (() => Promise<T>)), options?: Options) {
  return pRetry(async () => {
    const startTime = Date.now();
    let heartbeatInterval: NodeJS.Timeout | undefined;
    const onHeartbeatInterval = options?.onHeartbeat;
    if(options?.heartbeat && onHeartbeatInterval) {
      heartbeatInterval = setInterval(() => {
        onHeartbeatInterval(Date.now() - startTime);
      }, options.heartbeat);
    }
    try {
      return await (typeof promise === "function" ? promise() : promise);
    } finally {
      if(heartbeatInterval !== undefined) {
        clearInterval(heartbeatInterval);
      }
    }
  }, options);
}
