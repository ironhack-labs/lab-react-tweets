import React from "react";
import UserComponent from "./User";
import ActionComponent from "./Actions";
import MessageComponent from "./Message";
import TimestampComponent from "./Timestamp";
import ProfileImageComponent from "./ProfileImage";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImageComponent tweet={props.tweet.user} />

      <div className="body">
        <div className="top">
          <UserComponent userInfo={props.tweet.user} />
          <TimestampComponent timestamp={props.tweet.timestamp} />
        </div>

        <MessageComponent message={props.tweet.message} />

        <ActionComponent />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
