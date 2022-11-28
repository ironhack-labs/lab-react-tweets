import ProfileImage from "./ProfileImage";
import User from "./User";
import Actions from "./Actions";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User 
          userData = {props.tweet.user}
            
          />
          <Timestamp
            Timestamp={props.tweet.timestamp}
          />
          <span className="timestamp">Nov 30, 2020</span>
        </div>

        <Message
          Message={props.tweet.message}
        />

        <Actions
        />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
