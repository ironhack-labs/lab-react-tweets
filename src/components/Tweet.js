import User from "./User";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          <User userData={user} />
          <User name={user.name} handle={"@ " + user.handle} />
          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
