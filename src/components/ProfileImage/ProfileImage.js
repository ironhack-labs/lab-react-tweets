import React from "react";

const ProfileImage = ({ tweet }) => {
  return (
    <div>
      <img src={tweet.user.image} className="profile" alt="profile" />
    </div>
  );
};

export default ProfileImage;
