
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}></ProfileImage>

      <div className="body">
        <div className="top">
           <User>name={props.tweet.user.name}
                handle=@{props.tweet.user.handle}
                </User>
          <Timestamp>time={props.tweet.timestamp}</Timestamp>
        </div>

        <p className="message">{props.tweet.message}
        </p>

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
