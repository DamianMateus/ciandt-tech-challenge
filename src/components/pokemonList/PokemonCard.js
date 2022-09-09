import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import pokemonApi from '../../apis/pokemonApi';
import axios from 'axios';
import { fetchPokemonDetailList } from '../../redux/actions/pokemonListAction';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PokemonTypes from './PokemonTypes';

import pokemonCardStyle from "./pokemonCard.css"

export default function PokemonCard() {
  const pokemons2 = useSelector((state) => state.allPokemon.pokemonList);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData2 = () => {
    setState([])
    pokemonApi.get("/pokemon/?limit=120")
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

  const RenderList = pokemons2.map((value, index) => {
    return (
      <Col key={index}>
        <Card>
          <Card.Img variant="top" src={value.sprites.front_default} className="card-img" />
          <Card.Body>
            <Card.Title className='pokemonTitle'>{value.name}</Card.Title>
            <Card.Subtitle className='subtitle'> id: {value.id}</Card.Subtitle>
            <PokemonTypes types={pokemons2[index].types} />
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <>
      <Row xs={1} sm={1} md={1} lg={1} xl={3} xl={3} className="container-pokedex">
        {RenderList}
      </Row>
    </>
  )
}
