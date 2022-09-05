import { combineReducers } from "redux";
import {pokemonListReducer, pokemonDetailReducer} from "./pokemonListReducer"

const reducers = combineReducers({
  allPokemon: pokemonListReducer,
  detailPokemon: pokemonDetailReducer
})

export default reducers;