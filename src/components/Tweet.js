// import tweetsArray from './src/App.js'
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  
  const {tweet} = props;
  
  return (
    
    <div className="tweet">

      {/* <Tweet tweet={ tweetsArray[0] }> {user.name} {user.img} {user.handle} </Tweet> */}

      <ProfileImage image={tweet.user.image} />
    
      <div className="body">
        <div className="top">
            <User userData={tweet.user} />

          <Timestamp time={props.tweet.timestamp} />
        </div>
        
        <Message message={props.tweet.message} /> 

        <Actions />

      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
