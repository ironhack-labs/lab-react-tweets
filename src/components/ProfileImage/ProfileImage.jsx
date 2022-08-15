import React from 'react'

function ProfileImage(props) {
    const {userImg} = props;
  return (
    <div>
        
        <img src={userImg} className="profile" alt="profile"/>
    
    </div>
  )
}

export default ProfileImage

