import React from 'react';
import ProfileImage from "./ProfileImage";
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  const {name, image, handle } = props.tweet.user
  const {timestamp, message} = props.tweet
  
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
