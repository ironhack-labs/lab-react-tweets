function Tweet(probs) {
  return (
    <div className="tweet">
      <img
        src={probs.tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{probs.tweet.user.name}</span>
            <span className="handle">{probs.tweet.user.handle}</span>
          </span>

          <span className="timestamp">{probs.tweet.timestamp}</span>
        </div>

        <p className="message">
         {probs.tweet.message}
        </p>

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
