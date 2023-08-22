import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
      <Timestamp time={props.tweet.user.timestamp} />
      <Message message={props.tweet.user.message} />

      <div className="body">
        <div className="top">
         

          <span className="timestamp">{props.tweet.timestamp}</span>
        </div>

        <p className="message">
        {props.tweet.message}
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