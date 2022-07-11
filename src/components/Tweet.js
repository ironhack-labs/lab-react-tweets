import ProfileImage from './ProfileImage';
import Message from './Message';
import User from './User';
import TimeStamp from './Timestamp';
import Actions from './Actions';

function Tweet(props) {
  return (
    <div className="tweet">
      
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={props.tweet.user}/>    
          <TimeStamp timestamp={props.tweet.timestamp}/>
          
        </div>

        <Message message={props.tweet.message}/>

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
