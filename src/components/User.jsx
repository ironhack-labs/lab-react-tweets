import React from 'react';

function User({ userName, userHandle }) {
  return (
    <div className="info-user">
        <span className="user">
            <span className="name">{userName}</span>
            <span className="handle">@{userHandle}</span>
          </span>
    </div>

  )
}

export default User;