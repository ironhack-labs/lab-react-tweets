import "./App.css";
import Tweet from "./components/Tweet";
import "./index.css";
const Timestamp = ({ time }) => {
  return <span className="timestamp">{time}</span>;
};

export default Timestamp;
