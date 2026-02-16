import { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
    const url = state.nextLocationsURL ?? undefined;
    const shallow = await state.pokeAPI.fetchLocations(url);
    const locationArea = shallow.results;
    for (const location of locationArea) {
        console.log(location.name);
    }
    state.nextLocationsURL = shallow.next;
    state.prevLocationsURL = shallow.previous;
}

export async function commandMapb(state: State): Promise<void> {
    const url = state.prevLocationsURL ?? undefined;
    const shallow = await state.pokeAPI.fetchLocations(url);
    const locationArea = shallow.results;
    for (const location of locationArea) {
        console.log(location.name);
    }
    state.nextLocationsURL = shallow.next;
    state.prevLocationsURL = shallow.previous;
}