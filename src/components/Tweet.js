import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage src={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User user={props.tweet.user} />
            <Timestamp stamp={props.tweet} />
          </span>
        </div>

        <Message msg={props.tweet} />

        <div className="actions">
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
