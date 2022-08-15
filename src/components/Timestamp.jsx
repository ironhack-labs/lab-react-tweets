import React from 'react';

function Timestamp(props) {
  const timestamp = props.timestamp;
  return <span className="timestamp">{timestamp}</span>;
}

export default Timestamp;
