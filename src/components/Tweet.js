import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const tweet = props.tweet;
  const user = tweet.user;
  return (
    <div className="tweet">
    
      <ProfileImage imageURL={user.image} />
      <div className="body">
        <div className="top">
          <User details={user} />
          <Timestamp time={tweet.timestamp} />
        </div>
        <Message text={tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
