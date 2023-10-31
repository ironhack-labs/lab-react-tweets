import Actions from "./Actions.jsx";
import Message from "./Message.jsx";
import ProfileImage from "./ProfileImage.jsx";
import Timestamp from "./Timestamp.jsx";
import User from "./User.jsx";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
