import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const { user, message, timestamp } = tweet;

  return (
    <div className="tweet">
      {/* Iteration 4 */}
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          {/* Iteration 5 */}
          <User name={user.name} handle={user.handle} />

          {/* Iteration 6 */}
          <Timestamp time={timestamp} />
        </div>

        {/* Iteration 7 */}
        <Message message={message} />

        {/* Iteration 8 */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
