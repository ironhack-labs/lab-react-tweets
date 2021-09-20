import User from './User.js'
import Timestamp from './Timestamp.js'
import Message from './Message.js'
import Actions from './Actions.js'
import ProfileImage from './ProfileImage.js'

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user}/>

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user}/>

          <Timestamp time={props.tweet}/>
        </div>

          <Message text={props.tweet}/>

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
