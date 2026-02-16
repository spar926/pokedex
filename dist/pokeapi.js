import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache;
    constructor() {
        this.cache = new Cache(5000);
    }
    async fetchLocations(pageURL) {
        let url;
        if (pageURL) {
            url = pageURL;
        }
        else {
            url = PokeAPI.baseURL + "/location-area";
        }
        const cached = this.cache.get(url);
        if (cached !== undefined) {
            return cached;
        }
        const response = await fetch(url);
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }
    async fetchLocation(name) {
        const url = PokeAPI.baseURL + `/location-area/${name}`;
        const cached = this.cache.get(url);
        if (cached !== undefined) {
            return cached;
        }
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.cache.add(url, data);
            return data;
        }
        catch (e) {
            throw new Error(`Error fetching data to this endpoint: ${url}, error: ${e}`);
        }
    }
}
