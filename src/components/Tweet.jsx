import Timestamp from './Timestamp';
import User from './User';
import ProfileImage from './ProfileImage';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.image} />

      <div className="body">
        <div className="top">
          <User name={tweet.name} handle={tweet.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>

        <p className="message">{tweet.message}</p>

        <div className="actions">
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
