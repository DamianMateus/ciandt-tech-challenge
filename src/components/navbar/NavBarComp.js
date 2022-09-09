import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navbar from "../navbar/navbar.css";

export default function NavBarComp() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemon.pokemonList);
  const pokemonLink = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setTerm("");
    pokemonLink(`/pokemon/${term}`)
  }

  const changeHandler = (e) => {
    setTerm(e.target.value);
  }

  const onSearch = (searchPokemon) => {
    setTerm(searchPokemon)
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Pokedex App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/Pokedex">Pokedex</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={submitHandler}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={term}
                onChange={changeHandler}
              >

              </Form.Control>
              <div className='dropdown'>
                {
                  pokemons
                    .filter((item) => {
                      const searchPokemon = term.toLocaleLowerCase();
                      const name = item.name.toLocaleLowerCase();
                      return (
                        searchPokemon &&
                        name.startsWith(searchPokemon) &&
                        name !== searchPokemon
                      );
                    })
                    .slice(0, 10)
                    .map((pokemon, index) => (
                      <div
                        onClick={() => onSearch(pokemon.name)}
                        className="dropdown-row"
                        key={index}
                      >
                        {pokemon.name}
                      </div>
                    ))
                }
              </div>
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
