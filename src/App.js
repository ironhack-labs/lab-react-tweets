import "./App.css";
import Tweet from "./components/Tweet";
import styled from "styled-components";

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
      "sometimes. the human presses their noggin against mine. to figure out what im thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: 2. bark loudly. but at nothing 7. lose my ball under the couch7b. politely ask the human. to get my ball3. immediately lose it again. under the same couch4. big nap. you have worked hard2. repeat",
  },
];

const Title = styled.p`
  text-align: center;
  font-size: 2rem;
`;

function App() {
  return (
    <div className="App">
      {/* Using MAP */}
      {tweetsArray.map((tweet) => (
        <Tweet tweet={tweet} />
      ))}
      {/* Whithout MAP */}
      {/* <Tweet tweet={tweetsArray[0]} />
      <Tweet tweet={tweetsArray[1]} />
      <Tweet tweet={tweetsArray[2]} /> */}
      <>
        <Title>Welcome to my website</Title>
        {/* <p className="title">Welcome to my website</p> */}
      </>
    </div>
  );
}

export default App;
