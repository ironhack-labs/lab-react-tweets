import React from "react";

function profileImage(props) {
  return <img src={props.src} alt={props.alt} className={props.className} />;
}

export default profileImage;
