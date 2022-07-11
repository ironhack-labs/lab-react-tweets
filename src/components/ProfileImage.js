import React from 'react'

export default function ProfileImage(props) {
    console.log(props)
  return (
    <img src={props.profileImage} className="profile" alt="profile"/>
  )
}
