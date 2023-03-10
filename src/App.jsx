import { tweetsArray } from "./api/tweet";
import "./App.css";
import Tweet from "./components/Tweet";

const App = () => {
  return (
    <div className="App">
      {tweetsArray.map((tweet, i) => (
        <Tweet key={i} tweet={tweet} />
      ))}
    </div>
  );
};

export default App;
