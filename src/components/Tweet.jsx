import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";
import TimeStamp from "./TimeStamp";
function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          <User name={user.name} profile={user.handle} />
          {/* <span className="timestamp">{tweet.timestamp}</span> */}

          <TimeStamp timestamp={timestamp} />
        </div>

        <Message message={message} />
        {/* <p className="message">{tweet.message}</p> */}

        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
