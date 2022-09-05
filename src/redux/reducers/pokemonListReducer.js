import { ActionTypes } from "../constants/action-types";

const initialState = {
  pokemonList: [],
}

const initialStateDetail = {
  pokemonDetailList: []
}

export const pokemonListReducer = (state = initialState, {type, payload}) => {
  switch (type){
    case ActionTypes.FETCH_POKEMONLIST:
      return { ...state, pokemonList: payload };
    default:
      return state;
  }
}

export const pokemonDetailReducer = (state = initialStateDetail, {type,payload}) => {
  switch (type){
    case ActionTypes.FETCH_POKEMONDETAILS:
      return { ...state, pokemonDetailList: payload };
    default:
      return state;
  }
}