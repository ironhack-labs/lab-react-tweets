import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message'
import Actions from './Actions'

function Tweet(props) {
  const {tweet} = props
  const{user, timestamp, message} = tweet
  const {image} = user

  return (
    <div className="tweet">
      
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User userData ={user}/>
          <Timestamp timestamp={timestamp}/>
        </div>

        <Message message={message}/>

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
