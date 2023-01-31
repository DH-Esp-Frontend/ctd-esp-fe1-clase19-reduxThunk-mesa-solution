import React, { useEffect} from "react";
import { useQuery } from "react-query";
import { getPokemon} from "../queries/pokemon.queries";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const VistaPokemon = () => {

  const pokemonSelec = useSelector((state: RootState) => state.search);
  const {data: pokemon, isLoading, refetch} = useQuery("obtenerPokemon",() => getPokemon(pokemonSelec || ""),);

  useEffect(() => {
    if (pokemonSelec) {
      refetch();
    }
  }, [ pokemonSelec]);

  if (isLoading) return <div>Loading</div>;

  return pokemon ? (
    <div className="vistaPokemon">
      <h4>Pokemon: {pokemon.name}</h4>
      <h5>#{pokemon.id}</h5>
      <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
    </div>
  ) : null;
}


export default VistaPokemon;
