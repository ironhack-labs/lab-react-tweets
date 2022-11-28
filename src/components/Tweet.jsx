import React from 'react';
import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

export default function Tweet(props) {
  return (
    <div className='tweet'>
      <ProfileImage image={props.tweet.user.image} />

      <div className='body'>
        <div className='top'>
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />
        {props.children}
      </div>

      <i className='fas fa-ellipsis-h'></i>
    </div>
  );
}
