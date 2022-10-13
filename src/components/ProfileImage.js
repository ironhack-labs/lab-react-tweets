import React from "react";

const ProfileImage = (props) => {
  const { image } = props.user;
  return <img src={image} className="profile" alt="profile" />;
};

export default ProfileImage;
