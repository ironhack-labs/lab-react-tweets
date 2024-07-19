import Action from "./Action";
import Handle from "./Handle";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet(props) {
  console.log(props.tweets)
  return (
      <div className="tweet">
      <ProfileImage image = {props.tweets.user.image}/>
      <div className="body">
        <div className="top">
          
          <User user={props.tweets.user.name}/>         
          <Handle handle ={props.tweets.user.handle}/>
          <Timestamp timestamp={props.tweets.timestamp}/>
        </div>

        <Message message = {props.tweets.message}/>

   <Action/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
