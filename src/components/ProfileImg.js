import React from 'react'

export default function ProfileImg(props) {
  return (
        <img
        src={props.url}
        className="profile"
        alt={props.alt}
    />
  )
}
