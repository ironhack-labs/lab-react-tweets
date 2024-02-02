import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img src={props.tweet.user.image} className="profile" alt="profile" /> */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          <TimeStamp time={props.tweet.timestamp} />
        </div>

        {/* <p className="message">{props.tweet.message}</p> */}
        <Message message={props.tweet.message} />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
