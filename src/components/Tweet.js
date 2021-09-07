// import userEvent from '@testing-library/user-event';
import React from 'react';
import ProfileImage from './ProfileImage';
import Timestamp from './TimeStamp';
import User from './User.js';
import Message from './Message'
import Actions from './Actions'

function Tweet({tweet}) {
  const {user, message, timestamp} = tweet
  const {name, image, handle} = user;
  
  return (
    <div className="tweet">
      <ProfileImage image = {image}/>

      <div className="body">
        <div className="top">
          <User user = {user}/>

          <Timestamp timestamp={timestamp}/>
        </div>
        <Message message = {message}/>

        <Actions/ >

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;