import React from "react";

function ProfileImage(props) {
  //const {user}=props
  return (
    <div>
      <img src={props.image} className="profile" alt="profile" />
    </div>
  );
}

export default ProfileImage;
