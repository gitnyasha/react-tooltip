import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip text="This is a heading!">
        <h1>Hello World</h1>
      </Tooltip>

      <p>
        <Tooltip text="this is a sentence">
          Hover over this text and see for yourself.
        </Tooltip>
      </p>
    </div>
  );
}

export default App;
