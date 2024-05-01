// function Tweet( {tweet: {user, timestamp, message}}) {

import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet: { user, timestamp, message } }) {
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
