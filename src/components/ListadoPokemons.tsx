import React, { useEffect } from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import { buscarPokemons } from "../queries/pokemon.queries";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useQuery } from "react-query";
import { allPokemons } from "../redux/slice";

/*

*/
const ListadoPokemons = () => {
  const pokemonSearch = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch();

  const {
    data: pokemons,
    isLoading,
    refetch,
  } = useQuery("obtenerPokemons", () => buscarPokemons(pokemonSearch));
  /*
  Utilizamos el useEffect y fetchPokemon para guardar en Redux todos 
  los pokemons que nos devuelve useQuery
  */

  const fetchPokemon = () => pokemons && dispatch(allPokemons(pokemons));

  useEffect(() => {
    if (pokemonSearch) refetch();
    fetchPokemon();
  }, [pokemonSearch, pokemons]);

  if (isLoading) return <div> Loading... </div>;

  return <ListadoPokemonsItem />;
}

export default ListadoPokemons;
