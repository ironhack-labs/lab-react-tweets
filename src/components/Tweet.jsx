import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;
  const { name, image, handle } = user;
  return (
    <div className="tweet">
      <ProfileImage image={image} />


      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <TimeStamp time={timestamp} />
        </div>
          <Message message={message} />
          <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
