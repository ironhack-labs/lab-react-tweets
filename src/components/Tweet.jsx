import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Actions";

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

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
