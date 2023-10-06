import React, { Component } from "react";


class Learning extends Component{
  constructor(props ){
    super(props);
  this.state = {
    fruits:[
      {name: "Mango",weight: "120g"},
      {name: "Apple",weight: "20g"},
      {name: "Orange",weight: "60g"},
      ]
    }
  }
  render(){
  

  return (
  <div>
    <h1>Fruit name is {this.state.fruits[0].name}</h1>
    <h1>Fruit name is {this.state.fruits[1].name}</h1>
  <h1>Fruit name is {this.state.fruits[2].name}</h1>
  </div>
  )
 }
}

export default Learning