import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";

function Tweet({
  tweet: {
    user: { name, image, handle },
    timestamp,
    message,
  },
}) {
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <TimeStamp timestamp={timestamp}></TimeStamp>
        </div>

        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
