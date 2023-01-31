import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  url: string;
}
export interface PokemonsState {

  search: string;
  pokemon: Pokemon;
  allPokemons: any[];
}
const initialState: PokemonsState = {
 
  search: "",
  pokemon: { name: "", url: "" },
  allPokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    searchAnPokemon: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    allPokemons: (state, action: PayloadAction<any>) => {
      state.allPokemons.push(action.payload);
    },
  },
});

export const { allPokemons, searchAnPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
