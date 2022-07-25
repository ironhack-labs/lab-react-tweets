import { FaRegComment, FaRetweet, FaRegHeart, FaShare, FaEllipsisH } from 'react-icons/fa'

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <img src={tweet.user.image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">{`@${tweet.user.handle}`}</span>
          </span>

          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <p className="message">{tweet.message}</p>

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
