import ProfileImage from "./ProfileImage"
import TimeStamp from "./Timestamp"
import User from "./User"
import Message from "./Message"
import Actions from "./Actions"

function Tweet({tweet}) {

  const { user, timestamp, message } = tweet

  return (
    <div className="tweet">
      <ProfileImage image={user.image}/>

      <div className="body">
        <div className="top">
          <User userData={user}/>
          <TimeStamp time={timestamp}/>
        </div>

        <Message message={message}/>

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
