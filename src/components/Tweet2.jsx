

function Tweet({tweet}) {
  return (
    <div className="tweet">
      {/* User profile section */}
      <div className="user-info">
        <img src={tweet.user.image} alt={tweet.user.name} className="user-image" />
        <div className="user-details">
          <p className="user-name">{tweet.user.name}</p>
          <p className="user-handle">@{tweet.user.handle}</p>
        </div>
      </div>
      {/* Tweet content */}
      <div className="tweet-content">
        <p className="tweet-message">{tweet.message}</p>
        <p className="tweet-timestamp">{tweet.timestamp}</p>
      </div>
    </div>
  );
}

export default Tweet;
