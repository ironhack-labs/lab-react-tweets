import ProfileImage from './profileImage.jsx';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({ tweet }) {
  const { message, timestamp, user } = tweet;
  const { name, image, handle } = user;

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <span className="user"></span>
          <User name={name} handle={handle} />

          <span className="timestamp">Nov 30, 2020</span>
          <Timestamp timestamp={timestamp} />
        </div>

        <div className="actions"></div>
        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}
export default Tweet;
