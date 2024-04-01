import React from 'react';

function ProfileImage({ image, alt }) {
  return <img src={image} alt={alt} className="profile" />;
}

export default ProfileImage;
