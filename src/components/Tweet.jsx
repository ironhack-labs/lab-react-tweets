import Actions from "./Actions";
import ProfileImage from "./ProfileImage";
import TimesTamp from "./TimesTamp";
import User from "./User";
import Message from "./Message";

function Tweet({tweet}) {

const image_URL = tweet.user.image
const USER_NAME = tweet.user.name
const USER_HANDLE = tweet.user.handle
const TWEET_TIMESTAMP=tweet.timestamp
const TWEET_MESSAGE=tweet.message

  return (
    <div className="tweet">
      <ProfileImage
        image={image_URL}
      />

      <div className="body">
        <div className="top">
      <User
      name={USER_NAME}
      handle={USER_HANDLE}
      />

      <TimesTamp time={TWEET_TIMESTAMP}/>
        </div>

      <Message message={TWEET_MESSAGE} />

      <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
