import React from "react";


function Timestamp (props) {
    const { date }= props
    return (
        <span className="timestamp mt-1">{date}</span>
    )

}
export default Timestamp