import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />

          <Timestamp time={props.tweet.timestamp} />

          <Message message={props.tweet.message} />

          <Action />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
