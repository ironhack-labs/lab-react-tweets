import React from 'react'

export default function User(props) {
	return (
		<>
			<h3>{props.userData.name}</h3>
			<h4>{props.userData.handle}</h4>
		</>
	)
}
