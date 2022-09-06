import React from 'react';

function ProfileImage({tweet}) {
    return (
        <div className="tweet">
        <img
          src= {tweet.user.image}
          className="profile"
          alt="profile"></img>
          </div>
          )}

export default ProfileImage;