import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage ProfileImage={tweet.user.image} />
      <div className="body">
        <User name={tweet.user.name} handle={tweet.user.handle} />

        <Timestamp timestamp={tweet.timestamp} />

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
