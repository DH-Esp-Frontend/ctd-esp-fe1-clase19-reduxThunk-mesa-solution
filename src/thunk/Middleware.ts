import { createAsyncThunk } from "@reduxjs/toolkit";

export const thunkGetPokemons = createAsyncThunk(
  "pokemons/thunkGetPokemons",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data.results;
  }
);

export const thunkGetAnPokemon = createAsyncThunk(
  "pokemons/thunkGetAnPokemon",
  async (pokemonName: string) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    );
  
    return await response.json();
  }
);
    