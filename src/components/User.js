import React from 'react'
// passing {userData: {name, handle}} allows JS to look inside userData to find name, and handle
export default function User({userData: {name, handle}}) {
  return (
  
  <span className="user">
            <span className="name"> {name}</span>
            <span className="handle">@{handle}</span> 
          </span>
  )
}
