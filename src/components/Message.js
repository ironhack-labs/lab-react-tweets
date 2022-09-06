import React from 'react';

function Message({tweet}) {
    return (
        <p className="message">
        {tweet.message}
        </p>
          )}

export default Message;