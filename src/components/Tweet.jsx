import ProfileImage from "./ProfileImage";
import User from "./User";

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

          <span className="timestamp">{props.tweet.timestamp}</span>
        </div>

        <p className="message">{props.tweet.message}</p>

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
