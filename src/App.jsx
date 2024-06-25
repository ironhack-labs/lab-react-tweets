import Tweet from './Tweet';

const tweetsArray = [
  {
    user: {
      name: "John Doe",
      handle: "johndoe",
      image: "path/to/image"
    },
    timestamp: "2h ago",
    message: "This is a tweet message"
  },
  // Add more tweets here
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