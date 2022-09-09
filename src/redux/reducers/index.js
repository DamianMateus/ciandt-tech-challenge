import { combineReducers } from "redux";
import { pokemonListReducer, pokemonDetailListReducer } from "./pokemonListReducer"

const reducers = combineReducers({
  allPokemon: pokemonListReducer
})

export default reducers;