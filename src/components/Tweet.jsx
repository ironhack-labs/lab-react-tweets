import ProfileImage from "./ProfileImage";
import User from "./User"
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <div>
        <ProfileImage image={tweet.user.image} />
      </div>

      <div className="body">
        <div className="top">
          <span className="user">
            <User name={tweet.user.name} handle={tweet.user.handle} />
          </span>

          <span className="timestamp">
            <Timestamp time={tweet.timestamp} />
          </span>
        </div>

        <p className="message">
          <Message message={tweet.message} /> 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
