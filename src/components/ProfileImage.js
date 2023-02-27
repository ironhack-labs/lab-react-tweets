import React from 'react'

function Profileimage(props) {
  return (
    <div><img src={props.image} className="profile" alt="profile"/></div>
  )
}

export default Profileimage