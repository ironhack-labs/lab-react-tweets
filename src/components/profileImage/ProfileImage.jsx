import React from "react";
import './profileImage.css'


function ProfileImage(props) {
    const { image } = props
    return (
        <img className="image" src= { image } ></img>
    )
}
export default ProfileImage