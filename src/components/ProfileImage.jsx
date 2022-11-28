import React from "react";

function profileImage(props) {
    const { image } = props
    return (
        <img src={image} alt="profileImage" className="profile" />
    )
}
export default profileImage