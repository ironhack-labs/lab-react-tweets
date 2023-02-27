import Actions from "../components/Actions";
import Message from "../components/Message";
import ProfileImage from "../components/ProfileImage";
import Timestamp from "../components/Timestamp";
import User from "../components/User";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={props.tweet.user} />
          </span>
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
