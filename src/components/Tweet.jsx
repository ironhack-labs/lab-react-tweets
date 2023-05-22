import ProfileImage from "./ProfileImage"
import UserInfo from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"

function Tweet({tweet}) {

  const {user, timestamp, message} = tweet

  const { image, name, handle} = user
  
  return (
    
    
  <div className="tweet">
      <ProfileImage image={image}/>

      <div className="body">
        <div className="top">
          <UserInfo UserData={{name, handle}} />
          <Timestamp timestamp={timestamp}/>
        </div>

        <Message message={message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );

  
}

export default Tweet;
