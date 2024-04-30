import React from "react";

import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";
import Actions from "./Actions"; 
import Message from "./Message"
import User from "./User";



function Tweet(props) {
  const {user,timestamp,message}=props.tweet;
  console.log(props)
  return (
    <div className="tweet">
     <ProfileImage image={user.image}/>

      <div className="body">
        <div className="top">
      
        <User name={user.name} handle={user.handle} />

         <Timestamp  time={timestamp}/>

        </div>
          <Message message={message}/>
      
       
          <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
