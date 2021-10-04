import React from "react";

function ProfileImage(props) {
  const userImage = props.userImage;
  return (
    <>
      <img src={userImage} className="profile" alt="profile" />
    </>
  );
}

export default ProfileImage;
