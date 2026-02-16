import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;

    constructor() {
        this.cache = new Cache(5000);
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url: string;
        if (pageURL) {
            url = pageURL;
        } else {
            url = PokeAPI.baseURL + "/location-area";
        }

        const cached = this.cache.get(url) as ShallowLocations | undefined;
        if (cached !== undefined) {
            return cached;
        }

        const response = await fetch(url);
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }

    async fetchLocation(name: string): Promise<LocationAreas> {
        const url = PokeAPI.baseURL+ `/location-area/${name}`;

        const cached = this.cache.get(url) as LocationAreas | undefined;
        if (cached !== undefined) {
            return cached;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            this.cache.add(url, data)
            return data as LocationAreas;
        } catch (e) {
            throw new Error(`Error fetching data to this endpoint: ${url}, error: ${e}`);
        }

    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Location[];
};

export type LocationAreas = {
    id: number;
    name: string | null;
    game_index: number;
    encounter_method_rates: string[];
    location: string | null;
    names: string[];
    pokemon_encounters: PokemonEncounter[]
}

export type PokemonEncounter = {
    pokemon: Location;
    version_details: VersionDetails[];
}

export type VersionDetails = {
    version: Location;
    max_chance: string;
    encounter_details: string[];
}

export type Location = {
    name: string,
    url: string,
};