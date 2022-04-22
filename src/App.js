import "./App.css";
import H from "./components/h.js";
import P from "./components/p.js";
import Counter from "./components/Counter.js";

const App = () => (
  <div className="App">
    <H />
    <P />
    <Counter header="My name is Mario" />
  </div>
);

export default App;