import React from "react";

function Tweet({tweet}) {
  const { name, handle, image } = tweet.user;
  const { timestamp, message } = tweet;
  return (
    <div className="tweet">
      <img
        src={image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">
          {message}
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
