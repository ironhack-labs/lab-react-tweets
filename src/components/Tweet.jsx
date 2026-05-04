import Action from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {

const tweet = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          </span>

          <span className="timestamp">
          <Timestamp time={tweet.Timestamp.time} />
          </span>
        </div>

        <p className="message">
          <Message message={tweet.message} />
        </p>

        <div className="actions">
        <Action />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>


    
  );
}

export default Tweet;
