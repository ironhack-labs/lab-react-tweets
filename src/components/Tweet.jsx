import ProfileImage from "./ProfileImage";
import User from "./user";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const { tweet } = props;
  const { user, timestamp, message } = tweet;

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

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}
export default Tweet;
