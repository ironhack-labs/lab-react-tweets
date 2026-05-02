import ProfileImage from './ProfileImage.jsx'
import User from './User.jsx'
import Timestamp from './Timestamp.jsx'
import Message from './Message.jsx'

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.image} />

      <div className="body">
        <div className="top">
          <User name={props.name} handle={props.handle} />
          <Timestamp time={props.timestamp} />
        </div>

        <Message message={props.message} />

        <div className="actions">
          {/* Font Awesome icons */}
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
