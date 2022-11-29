import React from "react"; 
import User from "./User";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
    const { tweet } = props;
    const { user, timestamp, message } =  tweet;
    const { image } = user;

  return (
    <div className="tweet">
      <img
        src="https://i.imgur.com/9yw1Fyw.jpg"
        className="profile"
        alt="profile"
      />
      <ProfileImage profileImage={image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span>
          </span>
          <User userData={user}/>

          <span className="timestamp">Nov 30, 2020</span>
          <Timestamp timestamp={timestamp}/>
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
        <Message message={message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
