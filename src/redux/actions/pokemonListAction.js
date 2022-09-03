import pokemonApi from "../../apis/pokemonApi";
import { ActionTypes } from "../constants/action-types";

export const fetchPokemonList = () => async (dispatch) => {
  const response = await pokemonApi.get("/pokemon/?limit=1200");
  dispatch({ type: ActionTypes.FETCH_POKEMONLIST, payload: response.data.results})
}