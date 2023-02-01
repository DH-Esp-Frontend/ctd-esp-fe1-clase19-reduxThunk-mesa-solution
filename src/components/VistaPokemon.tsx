import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const VistaPokemon = () => {

  const { search,loading } = useSelector(( state: RootState ) => state);
  const { name, types, sprites, stats } = search;
  const { other:{ home:{ front_default } } } = sprites;
  
  if (loading) return <div>Loading...</div>;

  return search.name ? (
    <div className="vistaPokemon">
      <h4 className="pokemonName">
        {name.toUpperCase()} #{search.id}
      </h4>
      {types.map(({ type: { name } }) => (
        <span className={`typeName ${name}`}>{name.toUpperCase()}</span>
      ))}
      <img src={front_default} alt={name} />
      {stats.map(({ stat: { name }, base_stat }) => (
        <p>
          <span>{name}:</span> {base_stat}
        </p>
      ))}
    </div>
  ) : null;
}


export default VistaPokemon;
