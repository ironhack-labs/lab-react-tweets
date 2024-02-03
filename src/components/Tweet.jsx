import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from './Message';
import Actions from './Actions';


function Tweet(props) {
  const { user, timestamp, message } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      {/* <img
        src={user.image} 
        className="profile"
        alt="profile"
      /> */}
      <div className="body">
        <div className="top">
        <User name={user.name} handle={user.handle} />
        <Timestamp time={timestamp} />
        </div>
        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
