import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          <TimeStamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
      </div>
      <Actions />
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
