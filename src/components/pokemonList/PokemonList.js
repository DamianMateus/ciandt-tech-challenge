import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";

import PokemonCard from "./PokemonCard";
import Pagination from "../pagination/Pagination";

import pokemonApi from "../../apis/pokemonApi";

export default function PokemonList() {

  const pokemons2 = useSelector((state) => state.allPokemon.pokemonList);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);  
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(9);


  const loadData2 = () => {
    setState([])
    pokemonApi.get("/pokemon/?limit=10")
      .then(resp => {
        for (let index = 0; index < resp.data.results.length; index++) {
          axios.get(resp.data.results[index].url)
            .then(result => {
              setState(prevArray => [...prevArray, result.data])
            })
        }
      })
  }
  useEffect(loadData2, []);

  
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirtsPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = pokemons2.slice(indexOfFirtsPokemon, indexOfLastPokemon)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  //console.log(pokemons2, 'pokemons selector')
  console.log(pokemons2, 'pokemons2.length')
  return (
    <>
      <h1 className="text-primary m-4"> Pokedex </h1>
      <PokemonCard pokemons={currentPokemons} loading={loading}/>
      <Pagination pokemonsPerPage={pokemonPerPage} 
        totalPokemons={pokemons2.length}
        paginate={paginate}
      />
    </>
  )
}
