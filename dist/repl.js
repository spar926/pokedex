import { initState } from "./state.js";
export function cleanInput(input) {
    input = input.toLowerCase();
    input = input.trim();
    const temp = input.split(/\s+/);
    const newTemp = temp.filter((element) => element !== "");
    return newTemp;
}
export function startREPL() {
    const state = initState();
    const rl = state.readline;
    const commands = state.commands;
    rl.prompt();
    rl.on('line', async (line) => {
        const words = cleanInput(line);
        if (words.length > 0) {
            const commandName = words[0];
            const args = words.slice(1);
            try {
                const cmd = commands[commandName];
                if (cmd) {
                    await cmd.callback(state, ...args);
                }
                else {
                    console.log("Unknown command");
                }
            }
            catch (e) {
                console.error("Unknown command", e);
            }
        }
        rl.prompt();
    });
}
