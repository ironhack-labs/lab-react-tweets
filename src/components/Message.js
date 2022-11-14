import React from 'react';

function Message(props) {
    let { message } = props;
    return (
        <p> {message} </p>
    );
}

export default Message;