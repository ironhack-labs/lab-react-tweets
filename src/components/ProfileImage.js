import React from "react";

function ProfileImage(props) {
  console.log("image props", props);
  let { image } = props;
  return (
    <div>
      <img src={image} className="profile" alt="profile" />;
    </div>
  );
}

export default ProfileImage;
