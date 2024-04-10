import ProfileImage from "../profile-image/ProfileImage";
import User from "../user/User";
import Timestamp from "../timeStamp/Timestamp";
import Message from "../message/Message";
import Actions from "../actions/Actions";

function Tweet({tweet}) {
  const { user, message, timestamp } = tweet;
  console.info({user});
  return (
    <div className="tweet">
      <ProfileImage  image={user.image} />
      <User name={user.name} handle={user.handle} />

      <div className="body">
        <div className="top">
          <Timestamp time={timestamp} />

          <Message message={message} />

        </div>
      </div>
        
      <Actions />
    </div>
  );
}

export default Tweet;
