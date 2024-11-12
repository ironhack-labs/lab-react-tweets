import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage source={tweet.user.image} />
      <div className="body">
        <div className="top">
          <User source={tweet.user} />

          <Timestamp source={tweet.timestamp} />
        </div>

        <Message source={tweet.message} />

        <Actions/>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
