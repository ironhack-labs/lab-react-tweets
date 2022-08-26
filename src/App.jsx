import "./App.css";
import { Tweet } from "./container";
import { tweetsArray } from './data'

function App() {
  return (
    <div className="App">
      {tweetsArray.map((content) => {
        return(
          <Tweet 
            icon = {content.user.image}
            alt = {`icon profile to ${content.user.name}`}
            profileName = {content.user.name}
            userName = {content.user.handle}
            timeStamp = {content.timestamp}
            message = {content.message}
          />
        )
      })}
    </div>
  );
}

export default App;
