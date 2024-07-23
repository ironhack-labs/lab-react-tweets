import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet: { user: { name, image, handle }, timestamp, message } }) {
  return (
    <div className="tweet">
      <ProfileImage image={image} />
        <div className="body">
          <div className="top">
          <User name={name} handle={handle} />
          <Timestamp time={timestamp} />
        </div>
        <Message message={message} />

      <div className="actions">
      <Actions />
        </div>
      </div>
    <i className="fas fa-ellipsis-h"></i>
    </div>
);
}

export default Tweet;
