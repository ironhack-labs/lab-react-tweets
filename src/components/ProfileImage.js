import React from "react";

function ProfileImage(props) {
    return (
    <div className= "profileImage">
    
    <img src={props.img} className="profile" alt="profile"/>;
    </div>
    
    );
     
    }

  export default ProfileImage;
