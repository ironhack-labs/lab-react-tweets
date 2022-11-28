import "./App.css";
// Import DATABASE
import data from "./database/data";
// Import Component
import Tweet from "./components/Tweet";


function App() {
  return (
    <div className="App">
      <Tweet tweet={ data[0] } />
      <Tweet tweet={ data[1] } />
      <Tweet tweet={ data[2] } />
    </div>
  );
}

export default App;
