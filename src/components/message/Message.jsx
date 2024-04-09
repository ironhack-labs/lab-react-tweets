import React from "react";


function Message(props) {
    const { text } = props;
    return(
        <p className="message">{ text }</p>
    )

}
export default Message;