import React from "react";

// export default class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     const text = e.target.value;
//     this.props.chooseVideo(text);
//   }
//   render() {
//     return (
//       <form onClick={this.handleClick}>
//         <input type="radio" name="src" value="fast" /> fast
//         <input type="radio" name="src" value="slow" /> slow
//         <input type="radio" name="src" value="cute" /> cute
//         <input type="radio" name="src" value="eek" /> eek
//       </form>
//     );
//   }
// }

const Menu = (props) => {
// TODO repair error - linking to props in videopicker component is not working
  function handleClick(e) {
    console.log(props)
    const text = e.target.value;
    props.chooseVideo(text);
  }

  return (
      <form onClick={handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
;

export default Menu;