function Tweet(props) {
  const {tweet} = props
  const {user, timestamp, message} = tweet
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
