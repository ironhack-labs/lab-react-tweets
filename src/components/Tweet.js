import ProfileImage from './ProfileImage'
import TimeStamp from './Timestamp'
import User from './User'
import Message from './Messege'
import Actions from './Actions';

function Tweet(props) {
  return (
    <div className="tweet">
     <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user}/>
          <TimeStamp timestamp={props.tweet.timestamp} />
          
        </div>
          <Message message={props.tweet.message}/> 
        </div>
        <Actions />

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
