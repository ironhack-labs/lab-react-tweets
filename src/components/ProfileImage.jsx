import React from 'react'

function ProfileImage(props) {
    let {userImg} = props
  return (
    <img
        src={userImg}
        className="profile"
        alt="profile"
      />
  )
}

export default ProfileImage