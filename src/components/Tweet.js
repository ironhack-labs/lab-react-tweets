function Tweet({tweet}) {

  console.log(tweet)
  return (
    <div className="tweet">
      <img
        src={tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">{tweet.user.handle}</span>
          </span>

          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <p className="message">
          {tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="fa fa-comment"></i>
          <i className="fa fa-retweet"></i>
          <i className="fa fa-heart"></i>
          <i className="fa fa-share"></i>
        </div>
      </div>

      <i className="fa fa-ellipsis-h"></i>
    </div>
  );
}



export default Tweet;
