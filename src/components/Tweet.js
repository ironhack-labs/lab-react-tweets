import ProfileImage  from "../components/ProfileImage";
import User from "../components/User";
import TimeStamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";
function Tweet(props) {
  
  const {tweet}= props
 
  return (
    <div className="tweet">

    <ProfileImage image={tweet.user.image}/>
    
      <div className="body">
        <div className="top">
        <User userData={tweet.user} />
        
        <TimeStamp time={props.tweet.timestamp} />
        </div>

        <Message message={tweet.message} />
        <Actions />
      </div>

      
    </div>
  );
}

export default Tweet;
