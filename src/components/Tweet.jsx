import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet({ tweet }) {
  const IMAGE_URL = tweet.user.image
  const USER_NAME = tweet.user.name
  const USER_HANDLE = tweet.user.handle
  const TWEET_TIMESTAMP = tweet.timestamp
  return (
    <div className="tweet">
      <ProfileImage image={IMAGE_URL} />
      <div className="body">
        <div className="top">
          <User name={USER_NAME} handle={USER_HANDLE} />
          <Timestamp time={TWEET_TIMESTAMP} />
          {/* <span className="timestamp">{tweet.timestamp}</span> */}
        </div>

        <p className="message">{tweet.message}</p>

        <div className="actions">
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;