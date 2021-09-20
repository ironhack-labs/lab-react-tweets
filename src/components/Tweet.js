import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  //console.log(props)
  return (
    <div className="tweet">
      <ProfileImage tweetImage={props.tweet.user.image} />

      <div className="body">

        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp timestampData={props.tweet.timestamp} />
        </div>

        <Message messageData={props.tweet.message} />
        <Actions />
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
