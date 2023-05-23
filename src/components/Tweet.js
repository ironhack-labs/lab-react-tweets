import React from "react";
import ProfileImage from "./ProfileImage";
import User from "./User";

function Tweet(props) {
  const { name, image, handle} = props.tweet.user;
  const {timestamp, message}= props.tweet;

  return (
    <div className="tweet">
     <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
        <User userData = {props.tweet.user} />
         
          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">{message}</p>

        <div className="actions">
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