import React, {useState } from "react";


const Hook = props => {
const [fruitState, setFruitState] = useState({
    fruits:[
      {name: "Mango",weight: "120g"},
      {name: "Apple",weight: "20g"},
      {name: "Orange",weight: "60g"},
      ]
  });

const clickHandler = () => {
    setFruitState({
      fruits:[
        {name: "Samsung",weight: "120g"},
        {name: "Apple",weight: "20g"},
        {name: "Nokia",weight: "60g"},
        ]
    })
  } 
  


  return (
  <div>
    <button onClick={clickHandler}>Change me!</button>
    <h1>Fruit name is {fruitState.fruits[0].name}</h1>
    <h1>Fruit name is {fruitState.fruits[1].name}</h1>
    <h1>Fruit name is {fruitState.fruits[2].name}</h1>
  </div>
  )
}

export default Hook


