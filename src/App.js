import "./App.css";
import Tweet from "./components/Tweet";
import data from "./data/data";
function App() {
  return (
    <div className="App">
      <Tweet tweets={data[0]} />
    </div>
  );
}

export default App;
