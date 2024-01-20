import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message';
import Actions from './Actions'

function Tweet({ user, timestamp, message }) {
  
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
       <User userHandle={user.handle} userName={user.name} />

          <Timestamp time={timestamp} />
        </div>

        <Message tweetMessage={message} />

   <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
