import React, { useEffect, useState } from 'react';
import { isElementOfType } from 'react-dom/test-utils';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetail } from '../../redux/actions/pokemonListAction';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PokemonTypes from '../pokemonList/PokemonTypes';

export default function PokemonDetail() {
  const { pokemon } = useParams()
  const pokemons = useSelector((state) => state.allPokemon.pokemonList);
  const [state, setstate] = useState([]);
  const details = pokemons.find(element => element.name == pokemon)

  const loadData = () => {
    setstate([])
    setstate([details])
  }

  useEffect(() => {
    if (pokemon && pokemon !== "") (loadData(pokemon));
  }, [pokemon]);

  const DetailsList = state.map((value, index) => {
    return (
      <Card key={index}>
        <Card.Img variant="top" src={value.sprites.front_default} className="card-img" />
        <Card.Body>
          <Card.Title className='pokemonTitle'>{value.name}</Card.Title>
          <Card.Subtitle className='subtitle'> id: {value.id}</Card.Subtitle>
          <PokemonTypes types={value.types} />
          <Card.Text>Weight: {value.weight}</Card.Text>
          <Card.Text>Base experience: {value.base_experience}</Card.Text>
          {value.stats.map((e, index) => {
            return (
              <Card.Text key={index}>{e.stat.name}: {e.base_stat}</Card.Text>
            )
          })}
        </Card.Body>
      </Card>
    )
  })

  return (
    <>
      <div>
        {DetailsList}
      </div>
    </>
  )
}
