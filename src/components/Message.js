import React from "react";

function Message (props){
    const {message} = props
    return (
        <div>
            <span className="message">{message}</span>
        </div>
    )
}


 export default Message