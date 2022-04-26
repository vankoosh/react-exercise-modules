import "./App.css";
import H from "./components/h.js";
import P from "./components/p.js";
import Counter from "./components/FuncCounter.js";

const App = () => (
  <div className="App">
    <H />
    <P />
    <Counter header="Mario" />
  </div>
);

export default App;