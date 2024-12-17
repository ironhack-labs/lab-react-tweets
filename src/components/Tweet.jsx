import Actions from './Actions'
import Message from './Message'
import Timestamp from './Timestamp' 
import ProfileImage from './ProfileImage'
import User from './User'

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />

          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions /> 
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
