import React, { Component } from "react";
import Child from "./Child.js";

export default class Parent extends Component {
  handleClick(){
    document.querySelector('.p').style.color = "yellow";
    document.querySelector('.p').style.fontSize = "2rem";
  }
  render() {

    return (
      <React.Fragment>
        <Child onClick={this.handleClick}/>
        <h1 className="h1" onClick={this.handleClick}>This is an h1</h1>
      </React.Fragment>
    );
  }
}

// HACKparent child inheritance