import React from 'react';
// Optional: add specific styles for the Timestamp component here

function Timestamp({ time }) {
  return (
    <span className="timestamp">{time}</span>
  );
}

export default Timestamp;
