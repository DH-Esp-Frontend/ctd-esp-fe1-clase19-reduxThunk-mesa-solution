import React, {useState} from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";
import { useDispatch,useSelector } from "react-redux";
import { thunkGetAnPokemon } from "../thunk/Middleware";
import {filterName} from "../redux/slice"; 
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/store";


const BuscarPokemon: React.FC = () => {
    
    const [name, setName] = useState<string>("");
    const dispatch: AppDispatch = useDispatch();
  const { search, loading, allPokemons } = useSelector(
    (state: RootState) => state
  );

    const Submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(thunkGetAnPokemon(name));
      // dispatch(filterName(allPokemons[0]?.filter((x: any) => x?.name == name)))
    };

// console.log(allPokemons[0]?.filter((x:any) => x?.name == "pikachu"));

// const myFunction = (e:any)=>{
//   let result = allPokemons[0]?.filter((x: any) => x?.name == e.target.value);
//   setName(e.target.value)

// }
    return (
      <>
        <form onSubmit={Submit}>
          <div id="buscarPokemon">
            <label>Search Pokemon</label>
            <input
              type="text"
              placeholder={"Pikachu, Charmander, Ditto, etc"}
              // onChange={(e) => setName(e.target.value)}
              onChange={(e) => setName(e.target.value)}
            />
            <button>Search</button>
          </div>
        </form>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ListadoPokemons />
          <VistaPokemon />
        </div>
      </>
    );
}

export default BuscarPokemon;
