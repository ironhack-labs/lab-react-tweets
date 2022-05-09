function Tweet(prop) {


  return (
    <div className="tweet">
      <img
        src={prop.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{prop.name}</span>
            <span className="handle">@{prop.handle}</span>
          </span>

          <span className="timestamp">{prop.timestamp}</span>
        </div>

        <p className="message">
          {prop.message}
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
