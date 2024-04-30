import React from "react";

function ProfileImage({ image, alt }) {
  return <img src={image} className="profile" alt={alt} />;
}

export default ProfileImage; 