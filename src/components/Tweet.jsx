import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./user";
import Messages from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const {
    user: { image, name, handle },
    timestamp,
    message,
  } = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />{" "}
          <Timestamp timestamp={timestamp} />
        </div>

        <Messages className="message" message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
