import ProfileImage from './ProfileImage'
import User from './User'
import TimeStamp from './TimeStamp'
import Message from './Message'
import Actions from './Actions'

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <TimeStamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>
    </div>
  )
}

export default Tweet;
