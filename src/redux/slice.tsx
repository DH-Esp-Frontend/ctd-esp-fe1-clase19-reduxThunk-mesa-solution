import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { thunkGetPokemons } from "../thunk/Middleware";
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
  extraReducers(builder) {
    builder
      .addCase(thunkGetPokemons.fulfilled, (state,action) => {})
      .addCase("", () => {})
      .addCase("", () => {});
  },
});

export const { allPokemons, searchAnPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
