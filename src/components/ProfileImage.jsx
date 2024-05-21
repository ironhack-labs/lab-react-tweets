import React from "react";

function ProfileImage({ image }) {
  return (
    <div>
      <img src={image} className="profile" alt="profile" />
    </div>
  );
}

export default ProfileImage;
