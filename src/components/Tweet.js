import ProfileImage from './ProfileImage.js';
import Timestamp from './Timestamp.js';
import User from './User.js';
import Message from './Message.js';
import Actions from './Actions.js';

function Tweet(props) {
  console.log(props.tweet);
 

  return (
    <div className="tweet">
      
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
          <User userData={props.tweet.user} />
          </span>
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message}/>

        <Actions />

        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
