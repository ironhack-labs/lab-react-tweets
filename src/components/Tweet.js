import ProfileImage from "../components/ProfileImage";
import User from "../components/User";
import Timestamp from "../components/Timestamp";
import Message from "../components/Message"
import Actions from "../components/Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body"></div>
      <div className="top"></div>

      <User userData={props.tweet.user} />
      <Timestamp time={props.tweet.timestamp} />
      <Message message={props.tweet.message} />
      <Actions />
    </div>
  );
}

export default Tweet;



