import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage imgProfile={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userProfile={props.tweet.user} />

          <Timestamp timestampProfile={props.tweet.timestamp} />
        </div>

        <Message messageProfile={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
