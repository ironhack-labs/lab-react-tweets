import ProfileImage from './ProfileImage/ProfileImage';
import User from './User/User';
import Timestamp from './Timestamp/Timestamp';
import Message from './Message/Message';
import Actions from './Actions/Actions';

function Tweet(props) {
  const { tweet } = props;
  console.log(props);
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={tweet.user} />
          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
