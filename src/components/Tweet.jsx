import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet(props) {
  const src = props.tweet.user.image;
  const USER_NAME = props.tweet.user.name;
  const USER_HANDLE = props.tweet.user.handle;

  return (
    <div className="tweet">
      <ProfileImage image={src} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User name={USER_NAME} handle={USER_HANDLE} />
          </span>
          <Timestamp time={props.tweet.timestamp} />{" "}
          {/* passe par directement time={"2h ago"} */}
        </div>

        <Message message={props.tweet.message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
