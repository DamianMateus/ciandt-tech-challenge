import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
 //console.log(props.pokemons, 'pokemon list')
  return (
    <>
      <h1> Pokedex </h1>
      <PokemonCard pokemonList={props.pokemons}></PokemonCard>
    </>
  )
}
