import React from 'react'

function User(props) {
  return (
    <>
    <span className='name' >{props.userData.name}</span>
    <span className='handle' >{props.userData.handle}</span>
    </>
  );
}

export default User;