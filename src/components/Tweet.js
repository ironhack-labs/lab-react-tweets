import Actions from './Actions.js'
import Message from './Message.js'
import ProfileImage from './ProfileImage.js'
import Timestamp from './Timestamp.js'
import User from './User.js'

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage imgSrc={props.tweet.user.image} />

      <div className="body">

        <div className="top">
          <User
            user={props.tweet.user}
          />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <a href="#" className="more">
        <i className="fas fa-ellipsis-h"></i>
      </a>
    </div>
  )
}

export default Tweet
