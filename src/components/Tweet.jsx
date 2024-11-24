import Acctions from "./Acctions/Actions";
import Message from "./Message/Message";
import ProfileImage from "./ProfileImage.jsx/ProfileImage";
import Timestamp from "./timestamp/Timestamp";
import User from "./User/User";

function Tweet({ tweet }) {
  const {name, image, handle, timestamp, message } = tweet;
  

  return (
    <div className="tweet">

      <ProfileImage image={image} />
      
      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Acctions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
