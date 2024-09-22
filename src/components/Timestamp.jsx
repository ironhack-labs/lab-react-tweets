import React from 'react'

function Timestamp(props) {
    const { timestamp } = props
    return (
        <>
            <span className="timestamp">{timestamp}</span>
        </>
    )
}

export default Timestamp