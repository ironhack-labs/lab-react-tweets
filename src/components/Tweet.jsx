import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
import More from "./More";
function Tweet({ user, timestamp, message }) {
  const { name, image, handle } = user; 
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp time={timestamp} />          
        </div>
        <Message message={message} />
        <Actions />

      </div>

      <More />
    </div>
  );
}

export default Tweet;
