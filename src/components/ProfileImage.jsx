import React from 'react'

 const ProfileImage = (props) => {
  return (
    <div>
        <img
        src={props.img}
        className="profile"
        alt="profile"
      />
    </div>
  )
}

export default ProfileImage


