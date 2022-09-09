import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import pokemonApi from '../../apis/pokemonApi';
import axios from 'axios';
import { fetchPokemonDetailList } from '../../redux/actions/pokemonListAction';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PokemonTypes from './PokemonTypes';
import Icon from '../icon/Icon';

import pokemonCardStyle from "./pokemonCard.css"

export default function PokemonCard(props) {
  const RenderList = props.pokemons.map((value, index) => {
    return (
      <Col key={index}>
        <Card>
          <Icon name="icon-heart1" />
          <Card.Img variant="top" src={value.sprites.front_default} className="card-img" />
          <Card.Body>
            <Card.Title className='pokemonTitle'>{value.name}</Card.Title>
            <Card.Subtitle className='subtitle'> id: {value.id}</Card.Subtitle>
            <PokemonTypes types={value.types} />
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
