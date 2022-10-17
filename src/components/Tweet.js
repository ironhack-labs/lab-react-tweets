import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";

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

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
