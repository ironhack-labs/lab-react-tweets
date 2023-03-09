function Tweet({tweet}) {
  return (
    <div className="tweet">
      {/*  <img> Image: {tweet.image}</img>  */}

      <div className="body">
        <div className="top">
          <span className="user">
            <img className="profile" src={tweet.user.image}/>
            <span className="name">{tweet.user.name}</span>
            <span className="handle">@{tweet.user.name}</span>
          </span>

          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <p className="message">
          {tweet.message}
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
