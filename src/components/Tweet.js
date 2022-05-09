import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Actions";


function Tweet(props) {
  console.log(props.tweet)
  return (
    
<div className="tweet">

<ProfileImage image={props.tweet.user.image} />

<div className="body">
  <div className="top">
    
    <User userData={props.tweet.user.name} />
    <Timestamp time={props.tweet.timestamp} />
  </div>

  <Message message={props.tweet.message} />   
  
  <Action />
    
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
