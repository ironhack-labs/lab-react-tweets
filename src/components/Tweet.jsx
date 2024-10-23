// src/Tweet.jsx

import ProfileImage from './ProfileImage'
import User from './User'
import Actions from './Actions'
import Message from './Message'
import Timestamp from './Timestamp'

function Tweet ({ tweet }) {
  return (
    <div className='tweet'>
      <ProfileImage image={tweet.user.image} />

      <div className='body'>
        <div className='top'>
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className='fas fa-ellipsis-h'></i>
    </div>
  )
}

export default Tweet
