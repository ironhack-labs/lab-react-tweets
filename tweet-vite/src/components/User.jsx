import React from "react";
import ProfileImage from "./components/ProfileImage";
import User from "./components/User";
import Timestamp from "./components/Timestamp";
import Message from "./components/Message";
import Actions from "./components/Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <div className="content">
        <User name={tweet.user.name} handle={tweet.user.handle} />
        <Timestamp time={tweet.timestamp} />
        <Message message={tweet.message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;