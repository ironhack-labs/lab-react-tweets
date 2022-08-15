import React from 'react'

function ProfileImage(props) {
  const {image} = props;
  return (
    <div>
        <img src={image} alt="Profile" className='profile'/>
    </div>
  )
}

export default ProfileImage