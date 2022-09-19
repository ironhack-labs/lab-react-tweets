import Actions from "./Actions";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Timestamps from "./Timestamp";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={tweet.user} />
          <Timestamps timestamps={tweet.timestamp} />
        </div>


        <Message message={tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
