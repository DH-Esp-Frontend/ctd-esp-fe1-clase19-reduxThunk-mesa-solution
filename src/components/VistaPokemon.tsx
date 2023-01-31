import React, { useEffect} from "react";
// import { useQuery } from "react-query";
import { thunkGetPokemons } from "../thunk/Middleware";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const VistaPokemon = () => {

  const {search,loading} = useSelector((state: RootState) => state);
  // const {
  //   data: pokemon,
  //   isLoading,
  //   refetch,
  // } = useQuery("obtenerPokemon", () =>
  //   thunkGetPokemons()
  // );
// console.log("--------------->", pokemonSelec)
  // useEffect(() => {
  //   if (search.name != "") {
  //     thunkGetPokemons();
     
  //   }
  // }, [search]);

  if (loading) return <div>Loading</div>;

  return search.name ? (
    <div className="vistaPokemon">
      <h4 className="pokemonName">{`${search.name.toUpperCase()} #${
        search.id
      }`}</h4>
      <span className="typeName">{`${search.types.map(
        (types) => types.type.name
      )}`}</span>
      <img src={search.sprites.other.home.front_default} alt={search.name} />
      {search.stats.map((stat) => (
        <>
          <p>
            <span>{stat.stat.name}:</span> {stat.base_stat}
          </p>
        </>
      ))}
    </div>
  ) : null;
}


export default VistaPokemon;
