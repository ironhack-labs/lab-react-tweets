//Importación de los componentes 
import ProfileImage from './ProfileImage'
import Message from './Message'
import User from './User'
import Action from './Action'
import Timestamp from './Timestamp'



function Tweet() {
    return (
      <div className="tweet">
        <ProfileImage image={props.tweet.user.image} />
        <div className="body">
        
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <div className='actions'>
        <Action />
        </div>
        
        
      </div>

      <i class="fas fa-ellipsis-h"></i>

      </div>
    );
  }
  
  export default Tweet;