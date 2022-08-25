import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Tiemstamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const {tweet} = props
  const {user, timestamp, message} = tweet
  return (
    <div className="tweet">
      <ProfileImage image={user.image}/>

      <div className="body">
        <div className="top">
          <User userData={user}/>

          <Timestamp time={timestamp}/>
        </div>

        <Message messages={message}/>

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
