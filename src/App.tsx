import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";

import { QueryClientProvider, QueryClient } from "react-query";

export default function App() {

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <div className="App">
         
                <h1>Pokédex</h1>
                <div id="bandejaDeEntrada">
                    <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                        <BuscarPokemon/>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    );
}
