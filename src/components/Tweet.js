import ImageComponent from "./ProfileImage";
import ActionComponent from './Actions.js';
import MessageComponent from './Message.js';
import UserComponent from './User.js';
import TimestampComponent from './Timestamp.js';

function Tweet({ tweet }) {
  console.log("esto es el imagen del twet", tweet.user.name)

  const { message, timestamp, user } = tweet
  const { image } = tweet.user

  return (
    <div className="tweet">
      <ImageComponent image={image} />
      <div className="body">
        <div className="top">
          <UserComponent user={user} />
          <TimestampComponent timestamp={timestamp} />
        </div>
        <MessageComponent message={message} />
        <ActionComponent />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}
export default Tweet;
