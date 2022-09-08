import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import pokemonApi from '../../apis/pokemonApi';
import axios from 'axios';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";



export default function PokemonCard(props) {
  const [state, setState] = useState([]);

  const loadData = () => {
    setState([])
    pokemonApi.get("/pokemon/?limit=20")
      .then(resp => {
        for (let index = 0; index < resp.data.results.length; index++) {
          axios.get(resp.data.results[index].url)
            .then(result => {
              setState(prevArray => [...prevArray, result.data])
            })
        }
      })
  }
  useEffect(loadData, []);

  const RenderList = state.map((value, index) => {
    return (
      <Col key={index}>
        <Card style={{ width: "10rem" }}>
          <Card.Img variant="top" src={value.sprites.front_default} />
          <Card.Body>
            <Card.Title>{value.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <>
      <Row xs={1} sm={1} md={3} lg={4} xl={6} xl={6} className="g-4">
        {RenderList}
      </Row>
    </>
  )
}
