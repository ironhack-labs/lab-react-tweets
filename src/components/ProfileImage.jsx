import React from "react"
function ProfileImage(prop) {
  return (
    <img src={prop.url}
      className="profile"
      alt="profile"
    />
  );
}

export default ProfileImage;