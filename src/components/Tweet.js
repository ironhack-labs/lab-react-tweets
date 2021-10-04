import React from "react";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
import User from "./User";
function Tweet(props) {
  const tweet = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage userImage={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
