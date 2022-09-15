import User from "./User";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  return (
    <div className="tweet">
        
      <ProfileImage src={props.tweet.user.image} />
      <div className="body">
        <div className="top">

          <User userData={props.tweet.user} />

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message}/>

        <Actions/>
      </div>
    </div>
  );
}

export default Tweet;