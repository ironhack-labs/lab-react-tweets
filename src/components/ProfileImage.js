import React from 'react'

export default function ProfileImage(props) {
    return (
        <img
            src={props.src}
            className={props.className}
            alt={props.alt}
        />
    )
}