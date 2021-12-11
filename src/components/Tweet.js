import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({tweet}) {
  
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">
         <User 
           name={tweet.user.name}
           handle={tweet.user.handle}
          />
          <Timestamp timestamp={tweet.timestamp}/>
        </div>

        <Message message={tweet.message}/>

        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
