import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        
        <p className="message">{props.tweet.message}</p>
        
        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
