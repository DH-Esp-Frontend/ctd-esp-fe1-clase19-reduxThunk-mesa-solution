import React, {useState} from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";
import { useDispatch } from "react-redux";
import { thunkGetAnPokemon } from "../thunk/Middleware";
import { AppDispatch } from "../redux/store";


const BuscarPokemon: React.FC = () => {
    
    const [name, setName] = useState<string>("");
    const dispatch: AppDispatch = useDispatch();

    const Submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(thunkGetAnPokemon(name));
    };

    return (
      <>
        <form onSubmit={Submit}>
          <div id="buscarPokemon">
            <label>Search Pokemon</label>
            <input
              type="text"
              placeholder={"Pikachu, Charmander, Ditto, etc"}
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
