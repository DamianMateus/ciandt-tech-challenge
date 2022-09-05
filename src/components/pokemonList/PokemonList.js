import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonList } from '../../redux/actions/pokemonListAction';
import { fetchPokemonDetail } from '../../redux/actions/pokemonListAction';
import PokemonCard from "./PokemonCard";


export default function PokemonList() {
  const pokemon = useSelector((state) => state.allPokemon);
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(fetchPokemonList())
  }, [])

  return (
    <>
      <h1> Pokedex </h1>
      <PokemonCard></PokemonCard>
    </>
  )
}
