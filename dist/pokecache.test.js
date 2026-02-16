import { test, expect } from "vitest";
import { Cache } from "./pokecache.js";
test("cache stores and reaps entries", async () => {
    const interval = 500; // 0.5 seconds
    const cache = new Cache(interval);
    const key = "https://example.com";
    const val = "Testdata";
    cache.add(key, val);
    const cached = cache.get(key);
    expect(cached).toBe(val);
    await new Promise((resolve) => setTimeout(resolve, interval + 100));
    const reaped = cache.get(key);
    expect(reaped).toBe(undefined);
    cache.stopReapLoop();
});
