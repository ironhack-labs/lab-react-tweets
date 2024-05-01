import Actions from "./Actions";
import Timestamp from "./Timestamp";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";

function Tweet({ tweets }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweets.user.image} />

      <div className="body">
        <div className="top">
          <User name={tweets.user.name} handle={tweets.user.handle} />

          <Timestamp time={tweets.timestamp} />
        </div>

        <Message message={tweets.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
