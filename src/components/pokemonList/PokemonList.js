import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchPokemonList } from '../../redux/actions/pokemonListAction';

export default function PokemonList() {
  const pokemon = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const { pokemonList } = useParams();

  useEffect(() => {
    dispatch(fetchPokemonList())
  }, []);

  return (
    <div>
      Pokemon list component
    </div>
  )
}
