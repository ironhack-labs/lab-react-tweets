import React from 'react'

export default function ProfileImage(props) {
    return (
        // get the src of the image from the Tweet.js componant
        <img src={props.src} className="profile" alt="profile"/>
    )
}
