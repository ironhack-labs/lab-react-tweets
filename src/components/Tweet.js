import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileImageDos from './ProfileImageDos';
import ProfileImageTres from './ProfileImageTres';
import User from './User';
import UserDos from './UserDos';
import UserTres from './UserTres';
import Timestamp from './Timestamp';
import TimestampDos from './TimestampDos';
import TimestampTres from './TimestampTres';
import Message from './Message';
import MessageDos from './MessageDos';
import MessageTres from './MessageTres';
import Actions from './Actions';
import ActionsDos from './ActionsDos';
import ActionsTres from './ActionsTres';

function Tweet(props) {
  return (
    <div>
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
       
      <div className="body">
   
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions/>
     
      </div>  
      <i class="fas fa-ellipsis-h"></i>
     
    </div>

    <div className="tweetDos">
      <ProfileImageDos image={props.tweet.user.image} />
       
      <div className="body">
   
        <div className="top">
          <UserDos userData={props.tweet.user} />
          <TimestampDos time={props.tweet.timestamp} />
        </div>

        <MessageDos message={props.tweet.message} />
        <ActionsDos/>
     
      </div>  
      <i class="fas fa-ellipsis-h"></i>
     
    </div>

    <div className="tweetTres">
      <ProfileImageTres image={props.tweet.user.image} />
       
      <div className="body">
   
        <div className="top">
          <UserTres userData={props.tweet.user} />
          <TimestampTres time={props.tweet.timestamp} />
        </div>

        <MessageTres message={props.tweet.message} />
        <ActionsTres/>
     
      </div>  
      <i class="fas fa-ellipsis-h"></i>
     
    </div>
    </div>
  );
}

export default Tweet;
