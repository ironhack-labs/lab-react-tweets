import Actions from '../components/Actions'
import Message from '../components/Message'
import ProfileImage from '../components/ProfileImage'
import Timestamp from '../components/Timestamp'
import User from '../components/User'

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>
      <div className='body'>
      <div className="top">
        <User userData={props.tweet.user}/>
      <timestamp time={props.tweet.timestamp}/>
      </div>
      <p className='message'>
        <Message message={props.tweet.message}/>
      </p>
      <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
