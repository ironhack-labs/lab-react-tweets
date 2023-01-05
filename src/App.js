import "./App.css";
import Tweet from "./components/Tweet";
import data from "./data/data";
function App() {
  return (
    <div className="App">
      {data.map((tweet) => {
        return <Tweet tweets={tweet} />;
      })}
    </div>
  );
}

export default App;
