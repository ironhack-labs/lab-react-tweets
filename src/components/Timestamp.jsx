import React from "react";

function Timestamp(props) {
    const { time } = props
    return (
        <span className="timestamp">
            {time}
        </span >
    )
}
export default Timestamp