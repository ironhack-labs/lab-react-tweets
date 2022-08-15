import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import User from "./User/User";
import Timestamp from "./Timestamp/Timestamp";
import Message from "./Message/Message";
import Actions from "./Actions/Actions";

function Tweet(props) {

  const {tweet} = props;
  return (
    <div className="tweet">
      {/* <img
        src={userImg}
        className="profile"
        alt="profile"
      /> */}
      
      <ProfileImage userImg={tweet.user.image}/>

      <div className="body">
        <div className="top">

          {/* REPLACING USER */}
          
          <User name={tweet.user.name} handle= {tweet.user.handle}/>

          
         {/*  <span className="timestamp">{tweet.timestamp}</span> */}

         <Timestamp timestamp={tweet.timestamp} />
        </div>

      
        <Message message={tweet.message} />
       
        <Actions/>
        
          {/* Font Awesome icons */}
          
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
