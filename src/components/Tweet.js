import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import React from "react";
import Actions from "./Actions";

function Tweet(props) {
/*   const {user, timestamp, message} = props.tweet
  const { name, image, handle } = user */
const {tweet} = props
  return (
    <div className="tweet">
    <ProfileImage image={tweet.user.image} />
 
      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
        <Timestamp time={props.tweet.timestamp} />
</div>
          <Message message={props.tweet.message} />
      
</div>
        <Actions /> 

    </div>
  );
}

export default Tweet;
