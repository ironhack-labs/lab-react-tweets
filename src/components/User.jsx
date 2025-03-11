import React from 'react';

export const User = (props) => {
  return (
    <span className="user">
      <span className="name">{props.name}</span>
      <span className="handle">{props.handle}</span>
    </span>
  );
}
