import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User data={user} />
          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>

    </div>
  );
}
export default Tweet;
