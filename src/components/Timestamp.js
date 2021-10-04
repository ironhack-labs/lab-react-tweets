import React from "react"

const Timestamp = (props) => {
    const time = props.time
    return (
        <>
            <span className="timestamp">{time}</span>
        </>
    )
}

export default Timestamp