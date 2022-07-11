import React from "react";

function ProfileImg(props) {
  console.log(props);
  return <img src={props.src} className="profile" alt="profile" />;
}

export default ProfileImg;
