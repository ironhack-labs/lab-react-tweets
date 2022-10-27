import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage userImg={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={tweet.user} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />

        <div className="actions">
          <Actions />
        </div>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
