import { ActionTypes } from "../constants/action-types";

const initialState = {
  pokemonList: [],
  isLoading: true,
  error: null,
}

export const pokemonListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_POKEMONLIST:
      return { ...state, isLoading: false, pokemonList: payload };
    default:
      return state;
  }
}
