import React from 'react'

export default function ProfileImage(props) {
    // console.log(props.user)
    // console.log(props.tweet)
    // console.log(props.user.image)
    return (
        <img
            src={props.user.image}
            className="profile"
            alt="profile"
        />
    )
}


