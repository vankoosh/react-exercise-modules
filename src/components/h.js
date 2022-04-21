import React, { Component } from "react";
import P from "./p.js";

export default class H extends Component {
  handleClick(){
    document.querySelector('.p').style.color = "red";
    console.log("Clicked")
  }
  render() {

    return (
      <React.Fragment>
        <P onClick={this.handleClick}/>
        <h1 className="h1">This is an h1</h1>
      </React.Fragment>
    );
  }
}
