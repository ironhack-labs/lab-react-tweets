import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {

  const {user, timestamp, message} = tweet;

  return (
    <div className="tweet">
      <ProfileImage image={user.image}></ProfileImage>

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle}></User>
          <Timestamp time={timestamp}></Timestamp>
        </div>

        <Message message={message}></Message>

        <Actions></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
