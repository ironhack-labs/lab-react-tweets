import React from 'react'


export default function User(props) {
    const user1 = props.userData
	return (
        <>
    <span className="user">
    <span className="name">{user1.name}</span>
    <span className="handle">{user1.handle}</span>
          </span>

        </>
	)
}
