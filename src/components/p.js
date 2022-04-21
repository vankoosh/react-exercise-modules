import React from "react";

export default class P extends React.Component {
  render() {
     return (
      <React.Fragment>
        <p className="p" onClick={this.props.onClick}>Hello World and welcome. Click on me!</p>
      </React.Fragment>
    )
  }
}

 