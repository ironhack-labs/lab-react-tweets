import React from 'react'

export default function Message({message}) {
    return (
        <div>
            <p className="message">
          {message}
        </p>
        </div>
    )
}
