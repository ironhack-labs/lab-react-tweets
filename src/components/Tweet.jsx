import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './User';
import TimeStamp from './TimeStamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      {/* Display user profile image */}
      <ProfileImage image={tweet.user.image} name={tweet.user.name} />

      <div className="body">
        <div className="top">
          {/* Display user name and handle */}
          <UserInfo name={tweet.user.name} handle={tweet.user.handle} />

          {/* Display tweet timestamp */}
          <TimeStamp timestamp={tweet.timestamp} />
        </div>

        {/* Display the tweet message */}
        <Message message={tweet.message} />

        {/* Social action icons */}
        <Actions />
      </div>

      {/* Ellipsis icon for additional actions */}
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;