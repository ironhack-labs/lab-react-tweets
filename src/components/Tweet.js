import ProfileImage from '../components/ProfileImage'
import User from '../components/User'
import Timestamp from '../components/Timestamp'
import Message from '../components/Message'
import Actions from './Actions'

const Tweet = ({name, image, handle, timestamp, message}) => {
  return (
    <div className="tweet">
      <ProfileImage image={image}/>

      <div className="body">
        <div className="top">
          <User name={name} 
            handle={handle}
          />

          <Timestamp timestamp={timestamp}/>

        </div>

        <Message message={message}/>

        <Actions/>
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
