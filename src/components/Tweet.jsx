/*import React from "react";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
        className="profile"
        alt="profile"
      />

      <div className="tweet-content">
        <div className="top">
          <span className="user">
            <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span>
          </span>

          <span className="timestamp">Nov 30, 2020</span>
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */
/* <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;*/
import React from "react";
import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

const Tweet = ({ tweet }) => {
  const { user, timestamp, message } = tweet;

  return (
    <div className="tweet">
      <ProfileImage src={user.image} alt="profile" className="profile" />
      <User name={user.name} handle={user.handle} />
      <Timestamp time={timestamp} />
      <Message message={message} />
      <Actions />
    </div>
  );
};

export default Tweet;
