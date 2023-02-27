import Action from "../Action/Actions";
import Message from "../Message/Message";
import ProfileImage from "../ProfileImage/ProfileImage";
import Timestamp from "../Timestamp/Timestamp";
import User from "../User/User";
import './Tweet.css'

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet
  return (
    <div className="tweet">

      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">

          <User user={user} />

          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
