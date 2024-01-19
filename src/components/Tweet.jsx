
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";
function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}></ProfileImage>
      <div className="body">
        <div className="top">
        <span className="user">
        <User
        name={props.tweet.user.name}
        handle={props.tweet.user.handle} ></User>
        </span>
        <span className="timestamp"><Timestamp time={props.tweet.timestamp}></Timestamp></span>
      </div>
      <p className="message">
        <Message message={props.tweet.message}></Message> 
      </p>
      <div className="actions">
        <Actions></Actions>
      </div>
    </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
