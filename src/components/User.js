import React from 'react'

const User = (tweet) => {
//    const  {name, handle} = tweet.userData
  return (
    <div><span className="name">{tweet.userData.name}</span>
    <span className="handle">{tweet.userData.handle}</span></div>
  )
}

export default User