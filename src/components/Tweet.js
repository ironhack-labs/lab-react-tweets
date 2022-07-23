import ProfileImage from './ProfileImage.js';
import Timestamp from './Timestamp.js';
import User from './User.js';
import Message from './Message.js';
import Actions from './Actions.js';

function Tweet(props) {
  return (
    <div className="tweet">
    <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          
        <User userData = {props.tweet.user} />
        <Timestamp time={props.tweet.timestamp}/>
        <Actions />

          
        </div>

        <Message message={props.tweet.message} /> 

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
