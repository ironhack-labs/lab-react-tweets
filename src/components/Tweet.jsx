import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";

function Tweet({user, timestamp, message}) {
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle}/>
          <Timestamp time ={timestamp}/>
        </div>
        <Message message={message}/>
      </div>
        <Action/>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
