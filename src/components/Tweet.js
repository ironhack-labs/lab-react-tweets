import ProfileImage from "./ProfileImage.js"
import User from "./User.js"
import Timestamp from "./Timestamp.js"
import Actions from "./Actions.js"
import Message from "./Message.js"



function Tweet(props) {
  const {user, timestamp, message } = props.tweet
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} alt="profile-image"
      />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />  
       
        <Actions />

        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
