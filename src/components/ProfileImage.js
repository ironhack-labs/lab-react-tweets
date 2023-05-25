import React from 'react'

function ProfileImage({oneImage}) {
    console.log(oneImage)
  return (
    <div><img src={oneImage} className="profile" alt="profile"/></div>
  )
}

export default ProfileImage