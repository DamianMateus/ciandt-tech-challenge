import { ActionTypes } from "../constants/action-types";

export const favoritesReducer = (state = [], { type, payload  }) => {
  switch (type) {
    case ActionTypes.ADD_TO_FAVORITES:
      return state.concat(payload);
    default:
      return state;
  }  
}