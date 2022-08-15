import React from 'react'

function Timestamp(props) {
    const {time} = props;
  return (
    <div>
        <span className='timestamp'>{time}</span>
    </div>
  )
}

export default Timestamp