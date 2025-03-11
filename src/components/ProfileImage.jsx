import React from 'react';
//import ProfileImage from "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png";

function ProfileImage({image}) {
  return <img src={image} className='profile' alt='profile' />
    
  }

export default ProfileImage;