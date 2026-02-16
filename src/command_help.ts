import { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();
    const commands = Object.values(state.commands);
    for (const command of commands) {
        console.log(`${command.name}: ${command.description}`);
    }
    console.log();
}