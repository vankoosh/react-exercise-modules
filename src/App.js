import "./App.css";
import H from "./components/h.js";
import P from "./components/p.js";
import Mood from "./components/ClassCounter.js";

const App = () => (
  <div className="App">
    <H />
    <P />
    <Mood />
    {/* {<Counter header="My name is Mario" />} */}
  </div>
);

export default App;