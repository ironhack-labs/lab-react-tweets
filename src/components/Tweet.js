import ProfileImage from "./ProfileImage";
import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet, children }) {
  return (
    <div className="tweet">
      <ProfileImage data={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User data={tweet.user} />
          <Timestamp data={tweet.timestamp} />
        </div>

        <Message data={tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
