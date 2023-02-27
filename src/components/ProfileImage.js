
import React from 'react'

const ProfileImage = ({ image }) => {
    return (
        <div className='ProfileImage'>
            <img src={image} className="profile" alt="profile" />
        </div>
    )
}

export default ProfileImage


