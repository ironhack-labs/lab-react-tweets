import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet
  console.log(ProfileImage)

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">

        <div className="top">
          <User name={user.name} handle={user.handle} />
          <TimeStamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <div className="actions">
          <Actions>
            <i className="far fa-comment"></i>
            <i className="fas fa-retweet"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-share"></i>
          </Actions>
        </div>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
