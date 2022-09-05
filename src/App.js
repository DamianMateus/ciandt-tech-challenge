import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBarComp from "./components/navbar/NavBarComp";
import PokemonList from "./components/pokemonList/PokemonList";


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBarComp></NavBarComp>
      <div className="Container">
        <Routes>
          <Route path="/" />
          <Route path="/Pokedex" element={<PokemonList />} />
          <Route> 404 Not found! </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
