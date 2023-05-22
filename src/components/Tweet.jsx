import ProfileImage from './ProfileImage'
import Popino from './User'
import TimeStamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({ tweet }) {

  const { user, timestamp, message } = tweet

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          <Popino userData={user}></Popino>
          <TimeStamp timestamp={timestamp} />

        </div>
        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
