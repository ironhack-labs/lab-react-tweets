import React from 'react'

 function Timestamp(props) {
    const {timestampData} = props
  return (
    <div>
        <span className="timestamp"> {timestampData} </span>
    </div>
  )
}
export default Timestamp