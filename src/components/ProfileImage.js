import React from "react";

export default function ProfileImage({image}) {
    return (
        // get the src of the image from the Tweet.js
        <img src={image} className="profile" alt="profile"/>
    )
}
