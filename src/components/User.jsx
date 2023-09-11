// src/components/User.jsx

import React from "react";

function User({ name, handle }) {
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

<span className="user">
  <span className="name"> USER_NAME </span>
  <span className="handle">@ USER_HANDLE</span>
</span>

export default User;
