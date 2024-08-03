import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(tweet) {
  return (
    <div className="tweet">
      <ProfileImage tweet={tweet.tweet.user.image} />
      <div className="body">
        <Timestamp tweet={tweet.tweet.timestamp} />
        <User name={tweet.tweet.user.name} handle={tweet.tweet.user.handle} />
        <Message message={tweet.tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
