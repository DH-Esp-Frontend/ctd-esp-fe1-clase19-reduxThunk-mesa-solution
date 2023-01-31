import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { thunkGetPokemons, thunkGetAnPokemon } from "../thunk/Middleware";
import { PokemonsState,Pokemon } from "../types/pokemon.types";

let other = { home:{ front_default:"" } };
let stats = { base_stat: 0, stat: { name: "" } };
let type = { type: { name: "" } };

const initialState: PokemonsState = {
  search: { 
  name: "",
  url: "",
  id:0, 
  sprites:{other}, 
  stats:[stats], 
  types:[type]
},
  allPokemons: [],
  loading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    filterName:((state,action)=>{
      state.allPokemons = action.payload;
    })
  },
  extraReducers(builder) {
    builder
      .addCase(
        thunkGetPokemons.fulfilled,
        (state, action: PayloadAction<Pokemon[]>) => {
          state.allPokemons.push(action.payload);
          state.loading = false;
        }
      )
      
      .addCase( thunkGetPokemons.pending,(state, _action) => { state.loading = false; } )
      .addCase(
        thunkGetAnPokemon.fulfilled,
        (state, action: PayloadAction<Pokemon>) => {
          state.search = action.payload;
        }
      );
  },
});

export const { filterName } = pokemonSlice.actions;
export default pokemonSlice.reducer;
