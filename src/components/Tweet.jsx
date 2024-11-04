import ProfileImage from './ProfileImage.jsx';
import User from './User.jsx';
import Timestamp from './Timestamp.jsx';
import Message from './Message.jsx';
import Actions from './Actions.jsx';

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          <Timestamp time={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message}/>


        <Actions />
        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
