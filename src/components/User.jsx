import React from "react";
import ProfileImage from "./ProfileImage"; // Import the ProfileImage component
import User from "./User"; // Import the User component

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} alt={tweet.user.name} />

      <div className="body">
        {/* Render the User component */}
        <User name={tweet.user.name} handle={tweet.user.handle} />
        
        {/* Rest of your Tweet component */}
      </div>
    </div>
  );
}

export default Tweet;