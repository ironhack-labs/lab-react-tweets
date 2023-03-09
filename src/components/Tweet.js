import React from 'react'
import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from "./Timestamp"

function Tweet(props) {
  return (
    <div className='tweet'>
      <ProfileImage image={props.tweet.user.image}/>

      <div className='body'>
        <div className='top'>
          <User name={props.tweet.user.name}/>
          <Timestamp time={props.tweet.timestamp}/>

      
        </div>
      </div>
    </div>
  )
}

export default Tweet