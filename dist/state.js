import { createInterface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > ',
    });
    const commands = getCommands();
    const pokeAPI = new PokeAPI();
    const nextLocationsURL = null;
    const prevLocationsURL = null;
    return { readline: rl, commands, pokeAPI, nextLocationsURL, prevLocationsURL };
}
