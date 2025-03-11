import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from './User';
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage img ={props.oneTweet.user.image}/>      
      <div className="body">
        <div className="top">    
          <User name={props.oneTweet.user.name} handle={props.oneTweet.user.handle} />
          <Timestamp timeSt = {props.oneTweet.timestamp}/>
        </div>
        <Message sms = {props.oneTweet.message}/>
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
