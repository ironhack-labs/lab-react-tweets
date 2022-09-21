import User from '../components/User';
import Timestamp from '../components/Timestamp';
import Message from '../components/Message';
import ProfileImage from '../components/ProfileImage'
import Actions from '../components/Actions'

function TweetTwo(props) {
  //console.log(props)
  return (
    <div className="tweet">
      <ProfileImage src={props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User user={props.tweet.user}/>
          <Timestamp timestamp={props.tweet.timestamp}/>
        </div>
      </div>
      <Message msg={props.tweet.message}/>
      <Actions/>
    </div>
  );
}

export default TweetTwo;
