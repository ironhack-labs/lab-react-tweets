import "./App.css";
import Actions from "./components/Actions";
import ProfileImage from "./components/ProfileImage";
import Timestamp from "./components/Timestamp";
import Tweet from "./components/Tweet";
import User from "./components/User";
import Message from "./components/Message";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
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
      <ProfileImage image={tweetsArray[0].user.image} />
      <User
        userData={{
          name: tweetsArray[0].user.name,
          handle: tweetsArray[0].user.handle,
        }}
      />
      <Timestamp timestamp={tweetsArray[0].timestamp} />
      <Message message={tweetsArray[0].message} />
      <Actions />

      <ProfileImage image={tweetsArray[0].user.image} />
      <User
        userData={{
          name: tweetsArray[1].user.name,
          handle: tweetsArray[1].user.handle,
        }}
      />
      <Timestamp timestamp={tweetsArray[1].timestamp} />
      <Message message={tweetsArray[1].message} />
      <Actions />

      <ProfileImage image={tweetsArray[2].user.image} />
      <span className="user">
        <User
          userData={{
            name: tweetsArray[2].user.name,
            handle: tweetsArray[2].user.handle,
          }}
        />
      </span>
      <Timestamp timestamp={tweetsArray[2].timestamp} />
      <Message message={tweetsArray[2].message} />
      <Actions />
    </div>
  );
}

export default App;
