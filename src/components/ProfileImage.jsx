import React from 'react'

export const ProfileImage = (props) => {
    return (
        <div>
            <img src={props.image} className="profile" alt="profile"/>
        </div>
    )
}
