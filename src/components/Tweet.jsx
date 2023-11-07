import ProfileImage from "./ProfileImage";

function Tweet(props) {

  console.log(props.tweet.timestamp)
  console.log(props.tweet.user.name)
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweet.user.name} </span>
            <span className="handle">{props.tweet.user.handle} </span>
          </span>

          <span className="timestamp">{props.tweet.timestamp} </span>
        </div>

        <p className="message">
          {props.tweet.message}
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
