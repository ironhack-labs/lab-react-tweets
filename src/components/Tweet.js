import Actions from './Actions/Actions';
import Message from './Message/Message';
import ProfileImage from './ProfileImage/ProfileImage';
import Timestamp from './Timestamp/Timestamp';
import User from './User/User'

function Tweet({ tweet }) {

  return (
    <div className="tweet">

      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userInfo={tweet.user} />

          <Timestamp time={tweet.timestamp} />

        </div>

        <Message message={tweet.message} />

        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
