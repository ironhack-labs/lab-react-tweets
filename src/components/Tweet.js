import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage imgURL={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={props.tweet.user} />

          <Timestamp timestamp={props.tweet.timestamp} />
        </div>
        <Message>{props.tweet.message}</Message>
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
