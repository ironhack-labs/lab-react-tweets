import Action from "./Actions";
import Message from "./Message"
import profileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
function Tweet(props) {

  const { tweet } = props

  return (
    <div className="tweet">
      <profileImage image={props.tweet.user.image} />
      <div className="body">
        <User userData={props.tweet.user} />
        <Timestamp time={props.tweet.time} />
      </div>
      <Message message={props.tweet.message} />
      <Action />
    </div>
  )
}

export default Tweet;
