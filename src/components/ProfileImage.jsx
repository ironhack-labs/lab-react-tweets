import React from 'react';

export default function ProfileImage({ image, alt }) {
    return <img src={image} alt={alt} className="profile" />;
  }