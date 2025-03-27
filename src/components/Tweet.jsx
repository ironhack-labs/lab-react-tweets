import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span>

          <span className="timestamp">{props.tweet.timestamp}</span>
        </div>

        <p className="message">{props.tweet.message}</p>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
