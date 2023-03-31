import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
  let {user, timestamp, message} = props.tweet;
  console.log(props)
  return (
    
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
        <User name={user.name} handle = {user.handle}/>
        <Timestamp timestamp = {timestamp}/>
        </div>
        <Message message={message} />        
    
        <Actions/>

      
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>

  );
}

export default Tweet;
