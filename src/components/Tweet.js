import React from "react";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp"
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      
      <ProfileImage image={props.tweet.user.image} />
      {/*  <img
        src="https://i.imgur.com/b0EdHVV.jpg"
        className="profile"
        alt="profile"
      /> */}
<div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
          {/* <User userData={props.tweet.user} />
      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">"Thoughts of Dog®"</span>
            <span className="handle">dog_feelings</span>
          </span> */}
   <Timestamp time={props.tweet.timestamp} />
   </div>
        
         {/*  <span className="timestamp">1h ago</span>
        </div> */}
<Message msg={props.tweet.message}/>

      {/*   <p className="message">
        the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company
        </p> */}


        <Actions />

       {/* { <div className="actions"> 
           <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>}
        </div> */}
      </div>

      <i class="fas fa-ellipsis-h"></i> 
    </div>
  );
}

export default Tweet;
