import React, {useState} from 'react'
import Card from "react-bootstrap/Card";

export default function PokemonTypes(props) {
  
  const [types, setTypes] = useState([
    { type: 'grass', color: 'greenyellow' },
    { type: 'poison', color: 'purple' },
    { type: 'normal', color: 'brown' },
    { type: 'fire', color: 'darkorange' },
    { type: 'water', color: 'blue' },
    { type: 'electric', color: 'orange' },
    { type: 'ice', color: 'lightblue' },
    { type: 'fighting', color: 'red' },
    { type: 'ground', color: 'burlywood' },
    { type: 'flying', color: 'blueviolet' },
    { type: 'psychic', color: 'lightcoral' },
    { type: 'bug', color: 'green' },
    { type: 'rock', color: 'tan' },
    { type: 'ghost', color: 'darkorchid' },
    { type: 'dark', color: 'chocolate' },
    { type: 'dragon', color: 'darkmagenta' },
    { type: 'steel', color: 'gray' },
    { type: 'fairy', color: 'pink' },
  ]);

  const RenderList = props.types.map((value, index) => {
    const found = types.find(element => element.type === value.type.name)
    return(
      <Card.Text className='pokemonTypes' key={index} style={{backgroundColor: found.color}}>{value.type.name}</Card.Text>
    )
  })

  return (
    <>
      {RenderList}
    </>
  )
}
