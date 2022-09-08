import { combineReducers } from "redux";
import { pokemonListReducer } from "./pokemonListReducer"

const reducers = combineReducers({
  allPokemon: pokemonListReducer,
})

export default reducers;