import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./TimeStamp";
import User from "./User";
import Actions from "./Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <div className="body">
        <div className="top">
          <User user={tweet.user} />
          <TimeStamp timeStamp={tweet.timeStamp} />
        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;