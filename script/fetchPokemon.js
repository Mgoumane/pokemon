export const fetchPokemon = async () => {
    const res = await fetch("https://pokeapi-enoki.netlify.app/pokeapi.json");
    const tab = await res.json();
    return tab;
}

export default fetchPokemon;