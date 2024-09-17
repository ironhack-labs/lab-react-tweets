import "./App.css";
import Tweet from "./components/Tweet";
import "./index.css";

import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <div>
        <User name={tweet.user.name} handle={tweet.user.handle} />
        <Timestamp time={tweet.timestamp} />
        <Message message={tweet.message} />
        <Actions />
      </div>
    </div>
  );
};

export default Tweet;
