import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";
import TimeStamp from "./Timestamp";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage
        src={props.tweet.user.image}
        alt="profile"
        className="profile"
      />
      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          <TimeStamp timestamp={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
