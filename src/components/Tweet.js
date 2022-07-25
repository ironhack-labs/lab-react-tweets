import  ProfileImage  from "./ProfileImage.js";
import User from "./User.js"
import Timestamp from "./Timestamp"
import Message from "./Message.js"
import Action from "./Action.js"


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} className="profile" alt="profile"/>

      <div className="body">
        <div className="top">
    
          <User userData={props.tweet.user}/>
           
          <Timestamp  timestamp={props.tweet.timestamp}/>
          
        </div>

        <Message message={props.tweet.message}/>

        <Action/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
