import React from "react";

function ProfileImage({ profileImage }) {
  return (
    <div>
      <img src={profileImage} className="profile" alt="profile" />
    </div>
  );
}

export default ProfileImage;
