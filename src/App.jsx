import Tweet from './components/Tweet';
import './App.css';

const tweetsArray = [
  {
    user: {
      name: "Elon Musk",
      image: "https://i.imgur.com/CFpa3nK.jpg",
      handle: "elonmusk"
    },
    timestamp: "1h ago",
    message: "Going to Mars 🚀"
  },
  {
    user: {
      name: "Ada Lovelace",
      image: "https://i.imgur.com/1bX5QH6.jpg",
      handle: "ada_l"
    },
    timestamp: "2h ago",
    message: "Math + Poetry = Code 🧠💻"
  },
  {
    user: {
      name: "Bob Ross",
      image: "https://i.imgur.com/NiJj2Wz.jpg",
      handle: "happytrees"
    },
    timestamp: "3h ago",
    message: "Let’s paint a little tree right here 🎨🌲"
  }
];

function App() {
  return (
    <div className="App">
      <Tweet tweet={tweetsArray[0]} />
      <Tweet tweet={tweetsArray[1]} />
      <Tweet tweet={tweetsArray[2]} />
    </div>
  );
}

export default App;
