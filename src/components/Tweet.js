import Actions from './Actions'
import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';
import Message from './Message';

function Tweet(props) {


  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData = {props.tweet.user}/>
          <User name = {props.tweet.user.name}/>
          <User handle = {props.tweet.user.handle}/>

          <Timestamp time = {props.tweet.timestamp}/>
        </div>

        <Message message = {props.tweet.message}/>

       < Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
