import React from 'react'

export default function Message(props) {
    return (
        <div>
            <p className="message">
                {props.tweet.message}
            </p>
        </div>
    )
};
