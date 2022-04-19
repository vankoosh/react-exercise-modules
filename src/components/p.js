import React from "react";

class P extends React.Component {
  handleClick(){
    const para = document.querySelector('.p');
    para.style.color = "lightblue";
  }
  
  render() {
     return (
      <React.Fragment>
        <p className="p" onClick={this.props.onClick}>Hello World and welcome {this.props.name}</p>
      </React.Fragment>
    )
  }
}

export default P