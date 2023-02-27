import Actions from "../Actions/Actions";
import Message from "../Message/Message";
import ProfileImage from "../ProfileImage/ProfileImage";
import Timestamp from "../Timestamp/Timestamp";
import User from "../User/User";

function Tweet({ tweet }) {

  const { user, timestamp, message } = tweet

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User userData={user} />

          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
