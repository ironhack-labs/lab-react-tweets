import React from "react";
import Tweet from "./Tweet";
import "./index.css";

const tweetsArray = [
  {
    user: {
      name: "John Doe",
      image: "https://example.com/johndoe.jpg",
      handle: "@johndoe",
    },
    timestamp: "2h ago",
    message: "This is a sample tweet!",
  },
  {
    user: {
      name: "Jane Smith",
      image: "https://example.com/janesmith.jpg",
      handle: "@janesmith",
    },
    timestamp: "3h ago",
    message: "Another tweet here!",
  },
  {
    user: {
      name: "Bob Johnson",
      image: "https://example.com/bobjohnson.jpg",
      handle: "@bobjohnson",
    },
    timestamp: "4h ago",
    message: "Hello Twitter!",
  },
];

function App() {
  return (
    <div className="App">
      {tweetsArray.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
}

export default App;