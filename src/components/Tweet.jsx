import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      {/* Display the user's profile image */}
      <ProfileImage image = {props.tweet.user.image} />
      <div className="body">
        <div className="top">
          {/* Display the user's name and handle */}
          <User 
            name = {props.tweet.user.name}
            handle = {props.tweet.user.handle} 
            />
          {/* Display the tweet's timestamp */}
          <Timestamp time = {props.tweet.timestamp} />
        </div>

        {/* Display the tweet message */}
        <Message message = {props.tweet.message} />
      
      <Actions/>
      </div>
        
      
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;