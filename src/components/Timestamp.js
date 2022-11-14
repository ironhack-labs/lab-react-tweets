import React from 'react';

function Timestamp(props) {
    let { time } = props;
    return (
        <span> { time } </span>
    );
}

export default Timestamp;