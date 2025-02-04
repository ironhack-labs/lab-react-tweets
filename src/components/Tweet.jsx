import ProfileImage from './ProfileImage'; 
import User from './User'; 
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({ tweet }) {
  
   return (
    <div className="tweet">
      {/* User profile section */}
      <div className="user-info">
        <ProfileImage image={tweet.user.image} /> {/* Render ProfileImage component */}
        <div className="user-details">
          <User name={tweet.user.name} handle={tweet.user.handle} /> {/* Render User component */}
          <Timestamp time={tweet.timestamp} /> {/* Render Timestamp component */}
        </div>
      </div>
   

      {/* Tweet content */}
      <div className="tweet-content">
        <Message message={tweet.message} /> {/* Render Message component */}
      </div>

         {/* Actions section */}
      <Actions /> {/* Render Actions component */}
    </div>
  );
  
}

export default Tweet;
