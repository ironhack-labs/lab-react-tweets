function Tweet({userImage, userName, userHandle, userTimeStamp, userMessage}) {
  return (
    
    <div className="tweet">
      <img
        src={userImage}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{userName}</span>
            <span className="handle">{userHandle}</span>
          </span>

          <span className="timestamp">{userTimeStamp}</span>
        </div>

        <p className="message">
          {userMessage}
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
