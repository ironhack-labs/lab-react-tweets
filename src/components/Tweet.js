import React from "react";
import ProfileImage from "./ProfileImage";
import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

<div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp userData={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
      
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;