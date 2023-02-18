import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

// first destructering of props --> ({tweet})
const Tweet = ({ tweet }) => {
  console.log(tweet);
  // second destructuring
  const { message, timestamp, user } = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User user={user} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default Tweet;
