// THEN THE CHILD COMPONENT
import React from 'react';
import { styles } from "./styles";
import { PropTypes } from "prop-types";
// SO YOU CAN USE PROPTYPES IN THE END OF CHILD COMPONENT

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

export default class CopyCat extends React.Component {
  render() {
    const { copying, toggleTape, handleChange, input, name } = this.props;
    //IN CASE YOU HAVE MANY PROPS, PUT THEM TOGETHER AND DECONSTRUCT THEM
    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: 80 }}>Copy Cat {name || "Tom"}</h1>
        <input type={"text"} value={input} onChange={handleChange} />
        <img
          style={styles.imgStyles}
          alt="cat"
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying && input}</p>
      </div>
    );
  }
}

// THE DECONSTRUCTION OF PROPS MAKES IT ALSO EASY TO SEE WHICH propTypes YOU NEED TO SET HERE
CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
