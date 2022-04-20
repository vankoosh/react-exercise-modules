import React, { Component } from 'react';

class H extends Component {
  handleClick() {
    const para = document.querySelector('.p');
    para.style.fontSize = (1 + 0.1) + "rem" ;

    console.log(para.style.fontSize);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className='h1' onClick={this.handleClick}>this is an h1</h1>
      </React.Fragment>
    )
  }
}

export default H;