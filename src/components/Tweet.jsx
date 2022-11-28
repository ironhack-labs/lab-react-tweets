import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"

const Tweet = props => {

  const { user, timestamp, message } = props.tweet
  const { name, image, handle } = user

  return (
    <div className="tweet">

      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  )
}

export default Tweet;
