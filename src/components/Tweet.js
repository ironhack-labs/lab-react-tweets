import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <img src={props.tweet.user.image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Action />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
