import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet(prop) {
  return (
    <div className="tweet">
    <ProfileImage image = {prop.tweet.user.image}></ProfileImage>
      <div className="body">
        <div className="top">
        <User userData={prop.tweet.user}></User>
        <Timestamp time={prop.tweet.timestamp}></Timestamp>
        </div>
        <Message message ={prop.tweet.message}></Message>
        <Actions></Actions>

        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
