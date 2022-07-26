import React from "react";
import Actions from "./Actions";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.User.image} />

      <div className="body">
        
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
