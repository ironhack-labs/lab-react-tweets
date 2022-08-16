import React from 'react'


function ProfileImage(props) {
    const {img}= props;
  return (
    <img src={img} className="profile" alt="profile"/>
  )
}

export default ProfileImage; 