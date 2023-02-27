import ProfileImage from "../ProfileImage/ProfileImage";
import User from "../User/User";
import Timestamp from "../Timestamp/Timestamp";
import Message from "../Message/Message";
import Actions from "../Actions/Actions";
import './Tweet.css'

function Tweet({ tweet }) {

  const { user, timestamp, message } = tweet

  return (
    <div className="tweet">

      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
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
