// src/Tweet.jsx

import React from "react";
import ProfileImage from "./ProfileImage/";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ props }) {
  return (
    <div className="tweet">
      <div className="user-info">
        <ProfileImage image={IMAGE_URL} />
        <div className="user-details">
          <p className="user-name">{props.user.name}</p>
          <p className="user-handle">{props.user.handle}</p>
        </div>
      </div>
      <Message message={props.tweet.message} />
      <Timestamp time={props.tweet.timestamp} />
      <Actions />
    </div>
  );
}

export default Tweet;
