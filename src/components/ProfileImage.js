import React from 'react'

export default function ProfileImage({image}) {
    return (
        <div>
            <img
        src={image}
        className="profile"
        alt="profile"
      />
        </div>
    )
}
