import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet({ user, timestamp, message }) {
  // const { user, timestamp, message } = tweet;

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User userData={user} />
          <Timestamp time={timestamp} />
        </div>

        <Message text={message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
