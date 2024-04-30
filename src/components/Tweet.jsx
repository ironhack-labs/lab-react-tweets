import React from "react";
import ProfileImage from "../components/ProfileImage";
import User from "../components/User";
import Timestamp from "../components/Timestamp";
import Message from "../components/Message";
import Actions from "../components/Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} alt={tweet.user.name} />
      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        {/* Render the Actions component */}
        <Actions />

      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;