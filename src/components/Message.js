import React from 'react'

function Message(props) {
    return (
        <div>
            <p className="message">
            {props.messageData} 
            </p>
        </div>
    )
}

export default Message