import ProfileImage from '../components/ProfileImage';
import User from '../components/User';
import TimeStamp from '../components/Timestamp';
import Message from '../components/Message';
import Actions from '../components/Actions';
function Tweet(props) {
  return (
    <div className="tweet">
       <ProfileImage image={props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <TimeStamp time={props.tweet.timestamp} />
        </div>
        <Message msgData={props.tweet.message}/>
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
