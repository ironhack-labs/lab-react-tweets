import React from 'react'

const Timestamp = (tweet) => {
  return (
    <div><span className="timestamp"> {tweet.timeData} </span></div>
  )
}

export default Timestamp