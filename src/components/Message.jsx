import React from 'react'

export const Message = (props) => {
    return (
        <div>
            <p className="message">
                {props.message}
            </p>
        </div>
    )
}
