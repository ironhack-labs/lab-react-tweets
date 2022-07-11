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
      name: "Thoughts of Cat®",
      image: "https://i.pinimg.com/originals/d2/84/12/d28412eb3dc83160514d0946bfa1a925.jpg",
      handle: "cat_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Human®",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzsWvhPNvWmTaPuuW8Xl2Pqsquh4SFvdWGQ&usqp=CAU",
      handle: "hunan_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
  },
];

function App() {

  const listOfTweets = tweetsArray.map(function (tweet) {
    return <Tweet tweet={tweet} />

  })

  return (
    <div className="App">

      {listOfTweets}
      {/* <Tweet tweet={ tweetsArray[0] }/> */}

    </div>
  );


}

export default App;
