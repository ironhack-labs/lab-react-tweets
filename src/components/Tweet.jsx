import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const IMAGE_URL = tweet.user.image;
  const USER_NAME = tweet.user.name;
  const USER_HANDLE = tweet.user.handle;
  const TWEET_TIMESTAMP = tweet.timestamp;
  const TWEET_MESSAGE = tweet.message;

  return (
    <div className="tweet">
      <ProfileImage image={IMAGE_URL} />

      <div className="body">
        <div className="top">
          <User name={USER_NAME} handle={USER_HANDLE} />
          <Timestamp time={TWEET_TIMESTAMP} />
        </div>

        <Message message={TWEET_MESSAGE} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
