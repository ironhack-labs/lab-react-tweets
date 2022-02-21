import React from 'react'
import Message from './Message'
import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';
import Actions from './Actions';

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={props.tweet.user} />
          </span>

          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />

        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
