/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from "react";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Actions from "./Actions";

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


      <Actions/>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
