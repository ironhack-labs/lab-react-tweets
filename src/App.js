import "./App.css";
import Tweet from "./components/Tweet";

const tweetsArray = [
  {
    user: {
      name: "Ironhack",
      image: "https://i.imgur.com/9yw1Fyw.jpg",
      handle: "@ironhack",
    },
    timestamp: "Nov 30, 2020",
    message:
      "On December 7th, we will be hosting a #webinar that will introduce you to #SQL! Are you ready? 🚀",
  },

  {
    user: {
      name: "Lemmy",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGlp1doyb8hzKrN5Yowns7xp7IIRX2Kw4YFAMmDP3onHNzd29a",
      handle: "@lemmykilmeister",
    },
    timestamp: "Nov 11, 2024",
    message:
      "I love X. Just discovered it. Better than alcohol combined with speed",
  },

  {
    user: {
      name: "Lee",
      image:
        "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL2xnL2xlZWJ1cnRvbi5qcGc_ZGF0ZVVwZGF0ZWQ9MTQ5NTcwOTY3ODkzMA==",
      handle: "@leeburtonmusic",
    },
    timestamp: "Nov 13, 2024",
    message: "Glad to see @lemmykilmeister joining X. I thought he was dead",
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
