import React from 'react'

const ProfileImage = (tweet) => {
  return ( 
    <img
    src={tweet.image}
    className="profile"
    alt="profile"
  />
  )
}

export default ProfileImage