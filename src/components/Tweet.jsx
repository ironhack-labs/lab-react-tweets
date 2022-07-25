import { FaRegComment, FaRetweet, FaRegHeart, FaShare, FaEllipsisH } from 'react-icons/fa'
import Message from './Message'
import ProfileImage from './ProfileImage'
import Timestamp from './Timestamp'
import User from './User'

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={tweet.user} />

          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <div className="actions">
          {/* I like using react-icons components better 😁 */}
          <FaRegComment />
          <FaRetweet />
          <FaRegHeart />
          <FaShare />

          {/* Font Awesome icons 
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i> */}
        </div>
      </div>
      <FaEllipsisH />
      {/* <i class="fas fa-ellipsis-h"></i> */}
    </div>
  )
}

export default Tweet
