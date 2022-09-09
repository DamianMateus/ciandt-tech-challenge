import { combineReducers } from "redux";
import { pokemonListReducer } from "./pokemonListReducer"
import { favoritesReducer } from "./favoritesReducer";

const reducers = combineReducers({
  favourites: favoritesReducer,
  allPokemon: pokemonListReducer
})

export default reducers;