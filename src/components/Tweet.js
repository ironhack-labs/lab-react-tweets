import Actions from "./Action.js";
import ProfileImage from "./ProfileImage.js"
import User from "./User.js";
import Timestamp from "./Timestamp.js";
import Message from "./Message.js";
function Tweet(props) {

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp Time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
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
