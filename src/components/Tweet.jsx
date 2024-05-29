import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage imgSrc={tweet.user.image} />
      <div className="body">
        <div className="top">
          <User user={tweet.user.name} />
          <Timestamp time={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
