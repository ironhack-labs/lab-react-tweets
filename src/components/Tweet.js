import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions"
function Tweet(props) {
  return (
    <div className="tweet">
            
      <img
        src= {props.tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
          <User userData={props.tweet.user.name} />
          
          </span>
          <Timestamp time={props.tweet.timestamp} />
          <span className="timestamp">{props.tweet.timestamp}</span>
        </div>
        <Message message={props.tweet.message} />

        <p className="message">
        {props.tweet.message}
        </p>
        <Actions />

       
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
