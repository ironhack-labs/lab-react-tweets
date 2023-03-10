import React from 'react'

export default function ProfileImage({image}) {
  return (
    <img
        src={image}
        className="profile"
        alt="profile"
      />
  )
}
