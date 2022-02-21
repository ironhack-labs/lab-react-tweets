import React from 'react';

export default function User({ user }) {
  return (
    <span className="user">
      <span className="name">{user.name}</span>
      <span className="handle">@{user.handle}</span>
    </span>
  );
}
