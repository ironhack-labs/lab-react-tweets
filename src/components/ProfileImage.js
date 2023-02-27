import React from 'react'

function ProfileImage(image) {
    /* const {image} = props.imgURL; */

    console.log(image)

  return (

    <img src={image.image} className="profile" alt="profile"/>

  )
}

export default ProfileImage