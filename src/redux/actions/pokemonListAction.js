import pokemonApi from "../../apis/pokemonApi";
import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const fetchPokemonList = () => async (dispatch) => {
  const resultDetail = []
  pokemonApi.get("/pokemon/?limit=151")
    .then(resp => {
      Promise.all(
        resp.data.results.map((value => {
          axios.get(value.url)
            .then(result => {
              resultDetail.push(result.data)
            })
        }))
      )
    })
  dispatch({ type: ActionTypes.FETCH_POKEMONLIST, payload: resultDetail })
}
