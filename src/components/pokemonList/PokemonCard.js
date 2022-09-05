import React from 'react'
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function PokemonCard() {
  const pokemons = useSelector((state) => state.allPokemon);
  const { name, url } = pokemons

  var pokemon = Object.keys(pokemons).map(function (key) {
    return [Number(key), pokemons[key]];
  });


  const RenderList = pokemon[0][1].map((value, index) => {
    return (
      <Col key={index}>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src='' />
          <Card.Body>
            <Card.Title align="center" variant="h4" > {value.name}</Card.Title>
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
