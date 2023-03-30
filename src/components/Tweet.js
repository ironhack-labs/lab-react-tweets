import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message'
import Actions from './Actions'



function Tweet(props) {

  // because we named the props "tweet" in App.js, we need to destructure for props.tweet
  const { user, timestamp, message } = props.tweet;

  return (
    <div className="tweet">
    <ProfileImage image = {user.image} />


      <div className="body">
        <div className="top">

        <User userData={props.tweet.user} />
        <Timestamp time={props.tweet.timestamp} />



        </div>

        <Message message={props.tweet.message} />
        <Actions  />



      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
