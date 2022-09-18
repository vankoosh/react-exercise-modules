import React from "react";
import { PropTypes } from "prop-types"; // SO YOU CAN USE PROPTYPES IN THE END OF CHILD COMPONENT


// FIRST SOME STYLES FOR EXPORTING INTO YOUR JSX
const fontFamily = "Comic Sans MS, Lucida Handwriting, cursive";
const fontSize = "5vh";
const backgroundColor = "#282c34";
const minHeight = "100vh";
const minWidth = 400;
const display = "flex";
const flexDirection = "column";
const alignItems = "center";
const justifyContent = "center";
const color = "white";
const marginTop = "20px";
const width = "50%";

const divStyles = {
  fontFamily: fontFamily,
  fontSize: fontSize,
  color: color,
  backgroundColor: backgroundColor,
  minHeight: minHeight,
  minWidth: minWidth,
  display: display,
  flexDirection: flexDirection,
  alignItems: alignItems,
  justifyContent: justifyContent,
};

const imgStyles = {
  marginTop: marginTop,
  width: width,
};

// AND THEN EXPORT THEM

// export const styles = {
//   divStyles: divStyles,
//   imgStyles: imgStyles,
// };



// THEN THE CHILD COMPONENT
// import { styles } from "../styles";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

class CopyCat extends React.Component {
  render() {
    const { copying, toggleTape, handleChange, input, name } = this.props; //IN CASE YOU HAVE MANY PROPS, PUT THEM TOGETHER AND DECONSTRUCT THEM
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



// AND THEN THE ACTUAL PARENT COMPONENT

class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
      input: "",
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying }); // IN THIS CASE IT MEANS OPPOSITE AS IN IF ITS true, THIS WILL SET IT TO false
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <CopyCat
        name={"Mario"}
        copying={this.state.copying}
        toggleTape={this.toggleTape}
        input={this.state.input}
        handleChange={this.handleChange}
      />
    );
  }
}







