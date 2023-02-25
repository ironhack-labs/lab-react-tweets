import React from 'react'

const ProfileImage = (props) => {
  return (
    <div>
        <img src={props.image} className="profile" alt="profile"/>
    </div>
  )
}

export default ProfileImage