import React, { Component } from "react";

class Check extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     men:[
  //       {name:"House Greg"}
  //     ]
  //   }
  // }

  state = {
    name:"House Greg New"
  }
 changeName = (event) => {
  this.setState({
    name:event.target.value
  })
 }

  render(){
    return (
      <div>
        <input type = "text" onChange={this.changeName} value={this.state.name}></input>
        <h1>Hello {this.state.name}!!</h1>
      </div>
    )
       
    }
  }




export default Check