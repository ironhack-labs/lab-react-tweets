import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage imageSrc={tweet.user.image} />
      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>
        <Message text={tweet.message} />
        <Actions />
      </div>
    </div>
  );
}
export default Tweet;
