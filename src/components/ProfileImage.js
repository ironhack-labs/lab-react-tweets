import React from "react";

function ProfileImage(props) {
  let { image } = props;
  return <div>
    <img src={image} className="profile" alt="profile"/>
  </div>;
}

//Normal export
export default ProfileImage;
