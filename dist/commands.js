import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the name of 20 location areas in the Pokemon world",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the name of previous 20 location areas in the Pokemon world",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Takes the name of a location area and returns found pokemons",
            callback: commandExplore,
        }
    };
}
