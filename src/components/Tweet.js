import Message from './Message' 
import Timestamp from './Timestamp' 
import User from './User' 
import Actions from './Actions' 
import ProfileImage from './ProfileImage'

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      
      <div className="body">        
        <div className="top">
          <User user={props.tweet.user} /> 
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>
          <Message message={props.tweet.message} />
          <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
