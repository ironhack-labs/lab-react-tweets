import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const { user, message, timestamp } = tweet;

  const { name, handle } = user;

  return (
    <div className="tweet">
      <ProfileImage imgSrc={user} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />
        <div className="actions">
          <Actions className="far fa-comment" id="comment-icon" />
          <Actions className="fas fa-retweet" id="retweet-icon" />
          <Actions className="far fa-heart" id="heart-icon" />
          <Actions className="fas fa-share" id="share-icon" />
        </div>
      </div>

      <Actions className="fas fa-ellipsis-h" />
    </div>
  );
}

export default Tweet;
