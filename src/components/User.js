import React from 'react'


function User(props) {
  return (
    <div>
        <span className='user'>
            <span className="name"> {props.name} </span>
            <span className='handle'> @{props.name} </span>
        </span>
    </div>
  )
}

export default User