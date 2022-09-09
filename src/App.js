import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import {  fetchPokemonList } from "./redux/actions/pokemonListAction";
import NavBarComp from "./components/navbar/NavBarComp";
import PokemonList from "./components/pokemonList/PokemonList";
import PokemonDetail from "./components/PokemonDetails/PokemonDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonList())
  }, [])
  const pokemons = useSelector((state) => state.allPokemon.pokemonList);

  return (
    <Router>
      <NavBarComp></NavBarComp>
      <div className="Container mt-5">
        <Routes>
          <Route path="/"/>
          <Route path="/Pokedex" element={<PokemonList> </PokemonList>} />
          <Route path="/Pokemon/:pokemon" element={<PokemonDetail> </PokemonDetail>} />
          <Route> 404 Not found! </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
