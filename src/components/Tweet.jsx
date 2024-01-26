import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet({ user, timestamp, message }) {
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User UserName={user.name} UserHandler={user.handle} />
          </span>

          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
