import ProfileImg from "./ProfileImg";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImg image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User uData={props.tweet.user} />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
