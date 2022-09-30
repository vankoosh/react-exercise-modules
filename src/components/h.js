import React, { Component } from "react";
import P from "./p.js";

export default class H extends Component {
  handleClick(){
    document.querySelector('.p').style.color = "yellow";
    document.querySelector('.p').style.fontSize = "2rem";
  }
  render() {

    return (
      <React.Fragment>
        <P onClick={this.handleClick}/>
        <h1 className="h1" onClick={this.handleClick}>This is an h1</h1>
      </React.Fragment>
    );
  }
}
