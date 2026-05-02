import ProfileImage from "./ProfileImage.jsx"
import User from "./User.jsx"
import Timestamp from "./Timestamp.jsx"
import Message from "./Message.jsx"
import Actions from "./Actions.jsx"

function Tweet({tweet}) {
  const {user, timestamp, message} = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image}/>
      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle}/>
          <Timestamp time={timestamp}/>
        </div>

        <Message message={message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
