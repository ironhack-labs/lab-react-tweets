import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User
              name={props.tweet.user.name}
              handle={props.tweet.user.handle}
            />
          </span>
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message text={props.tweet.message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions actions={props.tweet.actions} />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
