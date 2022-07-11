import React from 'react'

import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message'
import Actions from './Actions'

function Tweet( props) {
  return (
    <div className="tweet">
      < ProfileImage image = {props.tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}

          <User userData={props.tweet.user} />

          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}

          <Timestamp timestamp={props.tweet.timestamp} />

        </div>

        {/* <p className="message">{props.tweet.message}</p> */}

        <p>
          <Message message={props.tweet.message} />
        </p> 

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
