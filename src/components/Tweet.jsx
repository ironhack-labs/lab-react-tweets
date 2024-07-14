import ProfileImage from "./tweet/ProfileImage";
import Message from "./tweet/Message";
import Timestamp from "./tweet/Timestamp";
import User from "./tweet/User";
import Actions from "./tweet/Actions";




function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <div className="content">
        <User name={tweet.user.name} handle={tweet.user.handle} />
        <Timestamp time={tweet.timestamp} />
        <Message message={tweet.message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;


