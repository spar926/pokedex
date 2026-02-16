export async function commandExplore(state, ...args) {
    const location = args[0];
    const data = await state.pokeAPI.fetchLocation(location);
    const pokemons = data.pokemon_encounters;
    console.log(`Exploring ${location}...`);
    console.log('Found Pokemon:');
    for (const pokemon of pokemons) {
        console.log(` - ${pokemon.pokemon.name}`);
    }
}
