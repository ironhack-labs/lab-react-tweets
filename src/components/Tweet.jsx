import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestanmp";
import Message from "./Message";
import user from "./user";

function Tweet() {
  const { user, timestamp, message } = tweet;
  return (
    <div className="tweet">
      <ProfileImage url={user.image} />

      <div className="body">
        <div className="top">
          <user user={user} />
          <Timestamp date={timestamp} />
        </div>
        <Message>{message}</Message>
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
