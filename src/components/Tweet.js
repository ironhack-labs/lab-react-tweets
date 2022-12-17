import User from "./User";
import Message from "./Message";
import Actions from "./Actions";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.user.image} />
      <div className="body">
        <div className="top">
          <User userData={props.user} />
          <Timestamp time={props.timestamp} />
        </div>
        <Message message={props.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
