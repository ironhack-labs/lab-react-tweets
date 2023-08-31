//require User from "./User";

function Tweet(props) {
  const { user, message, timestamp } = props;
  return (
    <div className="tweet">
      <img
        src={user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">@{user.handle}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">
          {message}
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
