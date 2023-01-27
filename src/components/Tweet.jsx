import ProfileImage from '../components/ProfileImage'
import User from '../components/User'
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  
  return (
    <div className="tweet">
    <ProfileImage image = {props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User user={props.tweet.user}/>
          <Timestamp timestamp ={props.tweet.timestamp}/>
        </div>
        <Message message={props.tweet.message}/>
        <div className="actions">
          {/* Font Awesome icons */}
          <Actions/>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
