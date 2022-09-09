import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  return (
    <>
      <h1> Pokedex </h1>
      <PokemonCard></PokemonCard>
    </>
  )
}
