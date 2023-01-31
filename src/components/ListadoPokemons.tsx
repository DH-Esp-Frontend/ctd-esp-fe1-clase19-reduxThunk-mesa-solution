import React, { useEffect } from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
// import { buscarPokemons } from "../queries/pokemon.queries";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
// import { useQuery } from "react-query";
import { thunkGetPokemons } from "../thunk/Middleware";
import { AppDispatch } from "../redux/store";

const ListadoPokemons = () => {
  const {search, loading,allPokemons} = useSelector((state: RootState) => state);

  const dispatch:AppDispatch = useDispatch();

  // const {
  //   data: pokemons,
  //   isLoading,
  //   refetch,
  // } = useQuery("obtenerPokemons", () => buscarPokemons(search.name));

  const fetchPokemon = () => dispatch(thunkGetPokemons());

  useEffect(() => {
    if (allPokemons.length == 0) fetchPokemon();
    
  }, []);

  if (loading) return <div> Loading... </div>;

  return <ListadoPokemonsItem />;
}

export default ListadoPokemons;
