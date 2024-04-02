import React from 'react';

const User = ({ name, handle }) => {
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

export default User;
