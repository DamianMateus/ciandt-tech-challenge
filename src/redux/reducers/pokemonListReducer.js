import { ActionTypes } from "../constants/action-types";

const initialState = {
  pokemonList: [],
}

export const pokemonListReducer = (state = initialState, {type, payload}) => {
  switch (type){
    case ActionTypes.FETCH_POKEMONLIST:
      return { ...state, pokemonList:payload };
    default:
      return state;
  }
}