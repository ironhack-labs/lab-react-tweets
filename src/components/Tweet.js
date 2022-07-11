import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}></ProfileImage>
      <div className="body">
        <div className="top">
          <User user={props.tweet.user}></User>
          <Timestamp time={props.tweet.timestamp}></Timestamp>
        </div>
        <Message message={props.tweet.message}></Message>
        <Actions></Actions>
      </div>
    </div>
  );
}

export default Tweet;
