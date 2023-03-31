import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
         <TimeStamp time={props.tweet.timestamp} /> 
        </div>

        <p className="message">
        <Message message={props.tweet.message} />
 </p>
      <Actions />
        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
