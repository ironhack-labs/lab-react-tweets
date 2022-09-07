import ProfileImage from "./ProfileImage";
import User from  "./User";
import Timestamp from "./TimeStamp";
import Message from "./Message"
import Actions from "./Actions.js"

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage src={props.tweet.user.image}
      />

      <div className="body">
        <div className="top">
        <User userData={props.tweet.user}/>

        <Timestamp time={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message}/>

       <Actions/>
      </div>
    </div>
  );
}

export default Tweet;
