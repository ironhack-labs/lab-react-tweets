import "./App.css";
import Tweet from "./components/Tweet";
import Photo from "./components/ProfileImage";
import User from "./components/User"
import TimesTamp from "./components/Timestamp";
import Message from "./components/Message"
import Actions from "./components/Actions";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      url: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      url: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      url: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
  },
];

function App() {
  return (
    <div className="App">
      <Tweet tweet={tweetsArray[0]} />


      <Photo url={tweetsArray[0].user.url} />
      <User name={tweetsArray[0].user.name} />
      <TimesTamp timestamp={tweetsArray[0].timestamp} />
      <Message message={tweetsArray[0].message} />
      <Actions />




      <Tweet tweet={tweetsArray[1]} />
      <Tweet tweet={tweetsArray[2]} />
    </div>
  );
}

export default App;
