export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        const entry = { createdAt: Date.now(), val: val };
        this.#cache.set(key, entry);
    }
    get(key) {
        return this.#cache.get(key)?.val;
    }
    #reap() {
        const limit = Date.now() - this.#interval;
        for (const [key, entry] of this.#cache) {
            if (entry.createdAt < limit) { // older time has smaller value
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}
