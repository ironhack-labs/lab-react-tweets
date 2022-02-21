import User from "./User";
import ProfileImage from "./ProfileImage"
import Message from "./Message";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

const Tweet = props =>  { 
  const {user, timestamp, message}= props.tweet
  
  return (
    <div className="tweet">
     <ProfileImage img = {user.image} />


      <div className="body">
        <div className="top">
          <User user={user}/>


          <Timestamp time= {timestamp}/>
          <span className="timestamp">{timestamp}</span>
        </div>

        <Message msg= {message} />
        
        <Actions />
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
