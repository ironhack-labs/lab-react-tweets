import React from "react";
import Tweet from "./components/Tweet";
import "./index.css";

const tweetsArray = [
  {
    user: {
      name: "Antonio Vargas",
      image: "https://i.pravatar.cc/150?img=3",
      handle: "@antonio"
    },
    timestamp: "2h ago",
    message: "Este es mi primer tweet!"
  },
  {
    user: {
      name: "Maria López",
      image: "https://i.pravatar.cc/150?img=5",
      handle: "@maria"
    },
    timestamp: "1h ago",
    message: "React es increíble!"
  },
  {
    user: {
      name: "Carlos Pérez",
      image: "https://i.pravatar.cc/150?img=8",
      handle: "@carlos"
    },
    timestamp: "30m ago",
    message: "¿Alguien más está practicando React?"
  }
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
