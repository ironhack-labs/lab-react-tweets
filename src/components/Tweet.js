import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweets.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweets.user} />
          <Timestamp time={props.tweets.timestamp} />
        </div>

        <Message message={props.tweets.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
