import ProfileImage from '../components/ProfileImage'
import User from '../components/User'
import Timestamp from '../components/Timestamp'
import Message from '../components/Message'
import Actions from '../components/Actions'

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;
  const { image } = user;

  return (

    <div className="tweet">
      <ProfileImage image={image} />
      <div className="body">
        <div className="top">
          <User userData={user} />
          <Timestamp time={timestamp} />
        </div>
        <Message message={message} />
        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
