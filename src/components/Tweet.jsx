import ProfileImage from "./ProfileImage";
import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet({tweet}) {
  console.log(tweet);
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          
          <Timestamp timestamp={tweet.timestamp} />
          
        </div>
        <Message message={tweet.message} />
        
        <div><Actions /></div>

        

      <i className="fas fa-ellipsis-h"></i>
    </div>
    </div>
  );
}

export default Tweet;
