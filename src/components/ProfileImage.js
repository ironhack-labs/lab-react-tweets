import React from 'react'

function ProfileImage(props) {
    /* console.log(props) */
    const {image} = props
  return (
    <img
        src={image}
        className="profile"
        alt="profile"
      />
  )
}

export default ProfileImage