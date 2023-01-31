
import React from "react";
import PropTypes from "prop-types";
import { extractPokemonId } from "../services/pokemon.services";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAnPokemon } from "../thunk/Middleware";
import { RootState, AppDispatch } from "../redux/store";


const ListadoPokemonsItem = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.allPokemons[0]);


  return (
    <div>
      {data &&
        data?.map(function( pokemon: { name: string, url: string }){
          return (
            <div
              id="listadoCategorias"
              onClick={() => dispatch(thunkGetAnPokemon(pokemon?.name))}
            >
              <strong>{pokemon?.name}</strong>
              <small> #{extractPokemonId(pokemon?.url)}</small>
            </div>
          );
})}
    </div>
  );
};

ListadoPokemonsItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default ListadoPokemonsItem;
