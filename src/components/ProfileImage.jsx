import React from "react";
import Tweet from "./Tweet";

function ProfileImage ( {image} ) {
    return (
        <img src={image} className="profile" alt="profile"/>
    )
};


export default ProfileImage;