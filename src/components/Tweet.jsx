import React from "react";
import ProfileImage from "./ProfileImage"; 
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;

  return (
    <div className="tweet">
      
      {/* Use the dynamic user image */}
      {/*<img src={user.image} className="profile" alt="profile" />*/}

      {/* Replace the img tag with the ProfileImage component */}
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          
          {/*<span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">@{user.handle}</span>
          </span>*/}

          {/* Replace the span containing user info with the User component */}
          <User name={user.name} handle={user.handle} />

          {/* Render the dynamic timestamp */}
          {/*<span className="timestamp">{timestamp}</span>*/}

          {/* Use the Timestamp component to render the timestamp */}
          <Timestamp time={timestamp} />
        </div>

        {/* Render the dynamic message */}
        {/*<p className="message">{message}</p>*/}

        {/* Use the Message component to render the tweet message */}
        <Message message={message} />

        {/*<div className="actions">
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>*/}

        {/* Use the Actions component to render the icons */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
