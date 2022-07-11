import React from "react";

export default function ProfileImage(props) {
  const image = props.image;
  return (
    <>
      <img src={image} className="profile" alt="profile" />
    </>
  );
}
