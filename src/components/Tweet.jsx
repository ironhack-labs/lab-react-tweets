import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  const { message, timestamp, user } = tweet;
  const { name, image, handle } = user;
  console.log(message, timestamp, name, image, handle);
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp time={timestamp} />
        </div>
        <Message message={message} />
        {/* Font Awesome icons */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
