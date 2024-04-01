import React from "react";

function ProfileImage({ src, alt }) {
  return <img src={src} className="profile" alt={alt} />;
}

export default ProfileImage;
