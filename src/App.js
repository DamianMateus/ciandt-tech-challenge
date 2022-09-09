import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import NavBarComp from "./components/navbar/NavBarComp";
import PokemonList from "./components/pokemonList/PokemonList";
import {  fetchPokemonList } from "./redux/actions/pokemonListAction";



import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonList())
  }, [])

  const pokemons = useSelector((state) => state.allPokemon.pokemonList);

  //console.log(pokemons, 'pokemons appjs')

  return (
    <Router>
      <NavBarComp></NavBarComp>
      <div className="Container">
        <Routes>
          <Route path="/"/>
          <Route path="/Pokedex" element={<PokemonList pokemons={pokemons}> </PokemonList>} />
          <Route> 404 Not found! </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
