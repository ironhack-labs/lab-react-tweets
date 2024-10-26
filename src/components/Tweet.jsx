import { Actions } from "./Actions";
import { ProfileImage } from "./ProfileImage";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.oneTweet.user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.oneTweet.user.name} </span>
            <span className="handle">{props.oneTweet.user.handle} </span>
          </span>
          <span className="timestamp">{props.oneTweet.timestamp} </span>
        </div>
        <p className="message">{props.oneTweet.message} </p>
      </div>
      <div className="actions">
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
