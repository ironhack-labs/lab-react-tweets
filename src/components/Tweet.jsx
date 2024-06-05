// import { Children } from "react";
import ProfileImage from "./ProfileImage.jsx";
import Message from "./Message.jsx";
import Timestamp from "./Timestamp.jsx";
import User from "./User.jsx";
import Actions from "./Actions.jsx";
function Tweet(props) {
  const { tweet } = props;
  const { message, timestamp, user } = tweet;
  const { name, image, handle } = user;

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      {/* <ProfileImage image={image} /> */}
      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          {/* <span className="timestamp">{timestamp}</span> */}
          <Timestamp time={timestamp} />
        </div>
        <Message message={message} />
        {/* <p className="message">{message}</p> */}

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
