import { createAsyncThunk } from "@reduxjs/toolkit";

export const thunkGetPokemons = createAsyncThunk(
  "pokemons/thunkGetPokemons",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data.results;
  }
);

export const thunkSearchPokemon = createAsyncThunk(
  "pokemons/thunkSearchPokemon",
  async (pokemonName) => {
    const data = thunkGetPokemons();
    const result = await filterFunction(data, pokemonName);
    return result;
  }
);

const filterFunction =(data:any,pokemonName:any)=>{
  return data.filter((pokemon:any) =>
        pokemon.name.toLowerCase().startsWith(pokemonName.toLowerCase())
      );
}

export const thunkGetAnPokemon = createAsyncThunk(
  "pokemons/thunkGetAnPokemon",
  async (pokemonName) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    );
    return await response.json();
  }
);

