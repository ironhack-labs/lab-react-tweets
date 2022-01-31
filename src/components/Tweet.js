import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message'
import Actions from './Actions'

function Tweet(props) {
  console.log('props', props)
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      
      <div className="body">
        <div className="top">
          <span className="user">
            <User user={props.tweet.user} />
          </span>
          <span className="timestamp">
            <Timestamp timestamp={props.tweet.timestamp} />
          </span>
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