import React from "react";

import Actions from "../components/Actions";
import ProfileImage from "../components/ProfileImage";
import User from "../components/User";
import Timestamp from "../components/Timestamp";
import Message from "../components/Message";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">

          <User userData={props.tweet.user}/>
          <Timestamp time={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
