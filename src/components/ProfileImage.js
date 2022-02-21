// Iteration 4 | ProfileImage Component
import React from 'react';

function ProfileImage(props) {
    return (
        <div>
            {/* Extract HTML */}
             <img src={props.image} className="profile" alt="profile" />
        </div>
    );
}

export default ProfileImage
