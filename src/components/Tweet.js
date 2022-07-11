
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./TimesTamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet({ tweet }) {


  return (
    <div className="tweet">

      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">


          <User userInfo={tweet.user} />



          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions actions={tweet.actions}/>
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
