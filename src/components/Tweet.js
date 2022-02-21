import TweetActions from './Actions';
import TweetMessage from './Message';
import TweetImage from './ProfileImage';
import TweetTimestamp from './Timestamp';
import TweetUser from './User';




function Tweet({ tweet }) {

  const { user, timestamp, message } = tweet

  const { name, image, handle } = user


  return (
    <div className="tweet">
      <TweetImage image={image}
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name"> <TweetUser name={name} /></span>
            <span className="handle"> <TweetUser handle={handle} /></span>
          </span>

          <span className="timestamp"><TweetTimestamp timestamp={timestamp}/></span>
        </div>

        <p className="message"><TweetMessage message={message}/></p>

        <TweetActions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
