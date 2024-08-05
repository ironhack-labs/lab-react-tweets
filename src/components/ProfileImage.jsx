// src/components/ProfileImage.jsx
import React from "react";

const ProfileImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default ProfileImage;
