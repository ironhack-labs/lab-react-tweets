import React from "react";
import App from "../App.jsx";
import ProfileImage from "./ProfileImage.jsx";
import Message from "./Message.jsx";
import Timestamp from "./Timestamp.jsx";
import Actions from "./Actions.jsx";
import User from "./User.jsx";
import Actions from "./Actions.jsx";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.img} />
      <User name={tweet.user.name} handle={tweet.user.handle} />
      <Timestamp time={tweet.timestamp} />
      <Message message={tweet.message} />
      <Actions />
    </div>
  );
}

export default Tweet;
