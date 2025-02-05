import React from 'react'

export const ProfileImage = ({image}) => {
return (
    <div>
    <img
    src={image}
    className="profile"
    alt="profile"
    />
    </div>
)
}

export default ProfileImage;
