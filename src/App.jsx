import React from "react";
import "./App.css";
import Tweet from "./components/Tweet";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
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
      {/* Pass the first tweet object as a prop */}
      {/*<Tweet tweet={tweetsArray[0]}/> */}

      {tweetsArray.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}

      {/* 1. Map Over tweetsArray:
            - Use the map function to iterate over tweetsArray. For each tweet, render a <Tweet /> component.
            - Pass the current tweet object as the tweet prop to each <Tweet /> component.
          2. Key Prop:
            - Assign a key prop to each <Tweet /> component using the index of the array item. This helps React efficiently update the DOM.
          3. Dynamic Rendering:
            - This approach ensures that the number of <Tweet /> components automatically matches the size of tweetsArray, making the code scalable. */}
    </div>
  );
}

export default App;
