import "./styles/index.scss";
import Time from "./components/Time.js";

function App() {
  return (
    <div className="App">
      <h2> New React project </h2>
      <h1>
        <Time local="Donald" />
      </h1>
    </div>
  );
}

export default App;