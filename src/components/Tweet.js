import ProfileImage from "./ProfileImage.js";
import User from "./User";
import Timestamp from "./Timestamp";
import Message  from "./Message.js";
import Actions from "./Actions.js";
function Tweet(props) {
  
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}
      />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
            {/* <User userData={props.tweet.user.handle} /> */}
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <p className="message">
        <Message message={props.tweet.message} /> 
        </p>

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
