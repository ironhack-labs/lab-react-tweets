import ProfileImage from "./ProfileImage.component";
import User from "./User.component";
import Timestamp from "./TimeStamp.component";
import Message from "./Message.component";
import Actions from "./Actions.component";
function Tweet(props) {
  let { user, timestamp, message } = props.tweets;

  return (
    <div className="tweet">
      <ProfileImage src={user.image} />
      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
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
