import React from "react";
import CopyCat from './CopyCat';

// AND THEN THE ACTUAL PARENT COMPONENT

export default class CopyCatContainer extends React.Component {
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







