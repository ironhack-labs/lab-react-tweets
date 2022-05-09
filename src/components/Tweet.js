import ProfileImage from "./ProfileImage.js"
import User from "./User.js"
import Timestamp from "./Timestamp.js"
import Message from "./Message"
import Actions from "./Actions"

function Tweet(prop) {


  return (
    <div className="tweet">
      <ProfileImage image={prop.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User handle={prop.tweet.user.handle} name={prop.tweet.user.name}/>

          <Timestamp timestamp={prop.tweet.timestamp}/>
        </div>

        <Message message={prop.tweet.message}/>
        
        <Actions />
      </div>

    </div>
  );
}

export default Tweet;
