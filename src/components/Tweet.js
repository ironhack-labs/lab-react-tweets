// import userEvent from "@testing-library/user-event";
import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './TimeStamps'
import Message from './Message'
import Actions from './Actions'


function Tweet(prop) {

 
const {tweet} = prop
const { user, timestamp, message } = tweet
const { name,image, handle } = user

  return (
    <div className="tweet">
      
      < ProfileImage image={image} />

      <div className="body">
        <div className="top">
         
          <User userData={user} />
          <Timestamp timestamp={timestamp} />


          
        </div>

        <Message message={message} /> 
        <Actions />
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
