/* eslint-disable no-unused-vars */
import React from "react";
import ProfileImage from "../profileImage/ProfileImage";
import User from "../user/User";
import Timestamp from "../timestamp/Timestamp";
import Message from "../message/Message";
import Actions from "../actions/Actions";

function Tweet(props) {
  const { name, image, handle, timestamp, message } = props
  return (
    <div className="tweet">
      <ProfileImage className="image" image={image} />



      <div className="body">
        <div className="top">
          <span className="user"></span>
          <User className="user" name= { name } handle= { handle } />
          <Timestamp className="timestamp" date= {timestamp}/>
        </div>

        <Message text= { message }/>
        

       <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
