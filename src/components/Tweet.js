import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {

  
  return (
    <div className="tweet">
       <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
          <User userData={tweet.user} />
          </span>

          <Timestamp timeData={tweet.timestamp}/>
        </div>

       <Message messageData = {tweet.message}/>

        <Actions/>
        
        </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
