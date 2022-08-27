import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet(props) {
  
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle}/>
          <Timestamp timestamp={props.tweet.timestamp}/>
        </div>

          <Message text={ props.tweet.message}/>

          <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
