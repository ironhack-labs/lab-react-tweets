import React from 'react';

function Message(props) {
    let { message } = props;
    return (
    <div>
        <p className='message'>{message}</p>       
    </div>
 );
}

export default Message;