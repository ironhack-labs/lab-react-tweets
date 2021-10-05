// components/Header.js
// COMPONENTE

// 1. IMPORTACIONES
// SINÓNIMO DEL REQUIRE QUE VIMOS EN BACKEND
import React from "react";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";

function Tweet(props) {
  // console.log( "archivos", props)
  return (
    <div className="tweet">
    <ProfileImage image={props.tweet.user.image} />

      <div className="body">

        <div className="top">
          <User userData={props.tweet.user}></User>
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
    
  );
  
  

}


export default Tweet;
