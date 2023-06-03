function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">
      <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Ironhack {props.tweet.user.name}</span>
            <span className="handle">@ironhack{props.tweet.user.handle}</span>
          </span>

          <span className="timestamp">Nov 30, 2020new({props.tweet.timestamp})</span>
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
          ehhh...{props.tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
