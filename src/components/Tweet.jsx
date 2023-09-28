import ProfileImage from "./ProfileImage";
import User from "./User";
import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";


function Tweet({ tweet }) {
  return (
    <div>
      <div className="tweet">
        <ProfileImage image={tweet.user.image} />
        <User name={tweet.user.name} handle={tweet.user.handle} />
        <Timestamp time={tweet.Timestamp} />
        <Message message={tweet.message} />
      </div>
      <div className="tweet">
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;