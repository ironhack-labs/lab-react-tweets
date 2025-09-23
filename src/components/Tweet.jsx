import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage profileImage={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle"> @{props.tweet.user.handle}</span>
          </span>

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message tweetMessage={props.tweet.message} />

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
