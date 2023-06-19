import { ProfileImage } from './ProfileImage';
import User from './User';
import { Timestamp } from './Timestamp';
import Message from './Message';
import Actions from './Action'

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          
          <User userData={props.tweet.user} />

          <Timestamp time={props.tweet.timestamp} />

        </div>

        <Message message={props.tweet.message} />

        <Actions /> {/* class --> className */}

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
