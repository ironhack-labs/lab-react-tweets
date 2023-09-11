
import React from "react";
import ProfileImage from "./ProfileImage"; // Import  ProfileImage component
import User from "./User"; // Import User component
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";



function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <div className="user-info">
        <ProfileImage src={tweet.user.image} alt={tweet.user.name} />
        <div className="user-details">
          
          <User name={tweet.user.name} handle={tweet.user.handle} />
        </div>
      </div>
      <div className="tweet-content">
        <Timestamp time = {tweet.timestamp} />
        <Message message={tweet.message} />
        <Actions />
      </div>
    </div>
  );
}



export default Tweet; //Export

