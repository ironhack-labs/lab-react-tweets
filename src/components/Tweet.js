// src/components/Tweet.js
import React from 'react';
import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';
function Tweet(props) {
  const { image, name, handle,} = props.tweet.user;
  const {message, timestamp} = props.tweet

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <span className="user">
          <User userData={{ name, handle }} />
          <Timestamp time ={timestamp}/>
          </span>

         
        </div>

        <Message message={message}/>

       
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
