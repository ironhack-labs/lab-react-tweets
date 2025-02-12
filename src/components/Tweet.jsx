import ProfileImage from "./ProfileImage.jsx/index.js";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message.jsx";
import User from "./User";

export default function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}