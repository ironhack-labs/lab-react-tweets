
import ProfileImage from './ProfileImage'; 
import User from './User'; 
import Timestamp from './Timestamp'; 
import Message from './Message'; 
import Actions from './Timestamp'; 


function Tweet({ tweet }) {
  return (

    <div className="tweet">  {/* Image is here */}
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">      
          <User name={tweet.user.name} handle={tweet.user.handle} /> {/* Username and Handle is here */}
          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
