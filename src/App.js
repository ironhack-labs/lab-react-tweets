import "./App.css";
import Tweet from "./components/Tweet";

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
    <Tweet
      tweet={tweetsArray[0]}
      message={tweetsArray[0].message}
      userData={tweetsArray[0].user.name}
      handle={tweetsArray[0].user.handle}
      image={tweetsArray[0].user.image}
      time={tweetsArray[0].timestamp}
    />
  );
}

// ITERATION 2 WITH .MAP():
//   {tweetsArray.map((elm) => (
//     <Tweet
//       message={elm.message}
//       name={elm.user.name}
//       handle={elm.user.handle}
//       image={elm.user.image}
//       time={elm.timestamp}
//     />

/* PREVIOUS VERSION FOR ITERATION 2:
      
      <Tweet
        tweet={tweetsArray[0]}
        message={tweetsArray[0].message}
        name={tweetsArray[0].user.name}
        image={tweetsArray[0].user.image}
        handle={tweetsArray[0].user.handle}
        timestamp={tweetsArray[0].timestamp}
      />
      <Tweet
        tweet={tweetsArray[1]}
        message={tweetsArray[1].message}
        name={tweetsArray[1].user.name}
        image={tweetsArray[1].user.image}
        handle={tweetsArray[1].user.handle}
        timestamp={tweetsArray[1].timestamp}
      />
      <Tweet
        tweet={tweetsArray[2]}
        message={tweetsArray[2].message}
        name={tweetsArray[2].user.name}
        image={tweetsArray[2].user.image}
        handle={tweetsArray[2].user.handle}
        timestamp={tweetsArray[2].timestamp}
      /> */

export default App;
