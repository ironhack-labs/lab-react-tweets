import { tweetsArray } from "./api/tweet";
import "./App.css";
import Tweet from "./components/Tweet";

const App = () => {
  return (
    <div className="App">
      <Tweet tweet={tweetsArray[0]} />
    </div>
  );
};

export default App;
