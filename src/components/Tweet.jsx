import React from "react";
import User from "./User"
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <img
        src={tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          
          <User user={tweet.user} />
         <TimeStamp time={tweet.TimeStamp}/>
        </div>
        {<Message message={tweet.message}/>}
       {<Actions />}   
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
 