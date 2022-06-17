function Tweet({tweet}) {
  return (
    <div className="tweet">
      {/*  <img> Image: {tweet.image}</img>  */}

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Name: {tweet.name}</span>
            <span className="handle">Name@: {tweet.name}</span>
          </span>

          <span className="timestamp">Timestamp:{tweet.timestamp}</span>
        </div>

        <p className="message">
          Message: {tweet.message}
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
