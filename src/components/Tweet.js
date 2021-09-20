import ProfileImage from './ProfileImage.js'
import User from "./User.js"
import Timestamp from "./Timestamp.js"
import Message from "./Message.js"
import Actions from "./Actions.js"

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image = {props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User userData= {props.tweet.user}/>
          <Timestamp time= {props.tweet.time} />
        </div>
          <Message message= {props.tweet.message} />
          <Actions />
      </div>
    </div>
  );
}

export default Tweet;
