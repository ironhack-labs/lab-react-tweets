import React from 'react'

export const ProfileImage = (childProps) => {
  return (
    <img
        src={childProps.image}
        className="profile"
        alt="profile"
      />
  )
}
