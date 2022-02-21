import React from 'react'

export default function Message(props) {
	console.log('Message Props: ',props)
	return (
		<>			
			<p className="message">{props.message}</p>			
		</>
	)
}