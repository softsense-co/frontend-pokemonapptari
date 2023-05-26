import { client } from "../axios";

export const getPokemon = () => client({
    method: "GET",
    url: "/pokemons",
});

export const getPokemonName = (name) => client({
    method: "GET",
    url: `/pokemons/${name}`,
});