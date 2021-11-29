import React from 'react'

export default function ProfileImage(props) {
    //console.log(props.image)
    return (
        <img
        src={props.image}
        className="profile"
        alt="profile"
      />
    )
}
