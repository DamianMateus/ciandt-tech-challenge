import { useState } from "react";
import pokemonApi from "../../apis/pokemonApi";
import axios from "axios";
import { ActionTypes } from "../constants/action-types";

// export const fetchPokemonList = () => async (dispatch) => {
//   const response = await pokemonApi.get("/pokemon/?limit=100")
//   dispatch({ type: ActionTypes.FETCH_POKEMONLIST, payload: response.data.results})
// }

export const fetchPokemonList = () => async (dispatch) => {
  const response = await pokemonApi.get("/pokemon/?limit=100").then(
    response => {
      const resultDetail = [];
      for (let index = 0; index < response.data.results.length; index++) {
        axios.get(response.data.results[index].url).then(
          result => {
            const name = response.data.results[index].name
            const finalResult = { name, ...result.data }
            resultDetail.push(finalResult)
          }
        )
      }
      dispatch({ type: ActionTypes.FETCH_POKEMONDETAILS, payload: resultDetail})
      dispatch({ type: ActionTypes.FETCH_POKEMONLIST, payload: response.data.results })
    }
  )
}
