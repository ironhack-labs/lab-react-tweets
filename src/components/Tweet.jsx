import ProfileImage from "./ProfileImage"
import Message from "./Message"
import User from "./User"
import Actions from "./Actions"
import TimeStamp from "./Timestamp"

const Tweet = props => {
  const { user, timestamp, message } = props.tweet
  const { name, image, handle } = user
  
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User userData={user} />
          <TimeStamp timestamp={timestamp} />
          
        </div>

        <Message message={message} />
        
        <Actions />
       
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
