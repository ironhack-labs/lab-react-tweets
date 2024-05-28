import React from 'react';
import ProfileImage from '../components/ProfileImage';
import User from '../components/User';
import Timestamp from '../components/Timestamp';
import Message from '../components/Message';
import Actions from '../components/Actions';

function Tweet({tweet}) {
{/* i update Tweet.jsx to use the prop data*/}
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <User name={tweet.user.name} handle={tweet.user.handle} />
      <Timestamp time={tweet.timestamp}/>
      <Message message={tweet.message}/>
      <Actions />

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
