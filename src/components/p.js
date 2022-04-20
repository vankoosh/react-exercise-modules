import React from "react";

class P extends React.Component {
  handleClick(){
    const para = document.querySelector('.p');
    para.style.color = "lightblue";
    console.log('paragraph clicked')
  }
  
  render() {
     return (
      <React.Fragment>
        <p className="p" onClick={this.handleClick}>Hello World and welcome {this.props.name}</p>
      </React.Fragment>
    )
  }
}

export default P