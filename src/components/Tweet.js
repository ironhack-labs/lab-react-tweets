import ProfileImage from './ProfileImage';
import User from './User';

function Tweet(props) {
  const { message, timestamp, user } = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User user={user} />
          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">{message}</p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
