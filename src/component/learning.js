import React, { Component } from "react";
import './learning.css';


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

  clickHandler = () => {
    // console.log("Hello!");
    // alert("Welcome");
    // this.state.fruits[0] = "samsung"
    this.setState({
      fruits:[
        {name: "Samsung",weight: "120g"},
        {name: "Apple",weight: "20g"},
        {name: "Nokia",weight: "60g"},
        ]
    })
   }
  render(){

    const style = {
      backgroundColor: 'orange',
      font: 'inherit',
      border: '2px solid maroon',
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '10px'
    };

  return (
  <div>
    <button style={style} onClick={this.clickHandler}>Click me!</button>
    <h1 className="Card">Fruit name is {this.state.fruits[0].name}</h1>
    <h1 className="Card">Fruit name is {this.state.fruits[1].name}</h1>
    <h1 className="Card">Fruit name is {this.state.fruits[2].name}</h1>
  </div>
  )
 }
}

export default Learning