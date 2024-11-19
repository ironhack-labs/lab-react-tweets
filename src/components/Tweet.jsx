function Tweet(tweet) {
  return (
    <div className="tweet">
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{tweet.name}</span>
            <span className="handle">@{tweet.handle}</span>
          </span>

          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <p className="message">
         {tweet.message}
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
