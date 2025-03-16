import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Tiemstamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(tweet) {

  
  return (
    <div className="tweet">
    

      <ProfileImage image = {tweet.tweet.user.image}/>

      <div className="body">

        <div className="top">

          <User name={tweet.tweet.user.name} handle={tweet.tweet.user.handle}/>
          <Timestamp timestamp = {tweet.tweet.timestamp}/>
          
        </div>

          <Message  message = {tweet.tweet.message}/>

          <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
