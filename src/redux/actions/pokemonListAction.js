import pokemonApi from "../../apis/pokemonApi";
import axios from "axios";
import { ActionTypes } from "../constants/action-types";



export const fetchPokemonList = () => async (dispatch) => {
  const resultDetail = loadData()
  dispatch({ type: ActionTypes.FETCH_POKEMONLIST, payload: resultDetail })
}

function loadData() {
  const resultDetail = []
  pokemonApi.get("/pokemon/?limit=1200")
    .then(resp => {
      for (let index = 0; index < resp.data.results.length; index++) {
        axios.get(resp.data.results[index].url)
          .then(result => {
            resultDetail.push(result.data)
          })
      }
    })
  return resultDetail;
}
