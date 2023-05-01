//import React from 'react';
import ProfileImage from './ProfileImage';
import User from "./User";
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  // const { name, image, handle }= props.tweet.user;
  // const { timestamp, message } = props.tweet;
  const tweet= props.tweet;
  return (
    <div className="tweet">
            <ProfileImage src={tweet.user.image} alt={tweet.user.name} />


      <div className="body">
        <div className="top">
        <User userData={tweet.user} />
        <User name={tweet.user.name} handle={"@ " + tweet.user.handle} />
        <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
        </div>
      </div>

      

      
  );
}

export default Tweet;
