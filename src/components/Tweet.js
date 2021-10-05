import React from "react";

import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  // console.log(props);
  // console.log(props.tweet);
  const { user, timestamp, message } = props.tweet;
  // console.log(timestamp);

  return (
    <>
      {/* <div className="tweet">
        <img
          src="https://i.imgur.com/9yw1Fyw.jpg"
          className="profile"
          alt="profile"
        />

        <div className="body">
          <div className="top">
            <span className="user">
              <span className="name">Ironhack</span>
              <span className="handle">@ironhack</span>
            </span>

            <span className="timestamp">Nov 30, 2020</span>
          </div>

          <p className="message">
            On December 7th, we will be hosting a #webinar that will introduce
            you to #SQL! Are you ready? 🚀
          </p>

          <div className="actions">
            <i class="far fa-comment"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-share"></i>
          </div>
        </div>

        <i class="fas fa-ellipsis-h"></i>
      </div> */}

      <div className="tweet">
        <ProfileImage image={user.image} />

        <div className="body">
          <div className="top">
            <User objUser={user} />

            <Timestamp time={timestamp} />
          </div>

          <Message message={message} />

          <Actions />
        </div>

        <i class="fas fa-ellipsis-h"></i>
      </div>
    </>
  );
}

export default Tweet;
