import React from 'react'

function ProfileImage(props) {
    //console.log(props)
    return (
        <div>
            <img
            src={props.tweetImage}
            className="profile"
            alt="profile"
            />
        </div>
    )
}

export default ProfileImage
