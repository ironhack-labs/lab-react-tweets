import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Timestamp from "./Timestamp";
import Action from "./Actions";
import User from "./User";

function Tweet(props) {
  const {tweet} = props
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">

          <User userName={tweet.user.name} handle={tweet.user.handle}/>

         <Timestamp timestamp={tweet.timestamp}/>
         
        </div>
        <Message message={tweet.message}/>

      <Action/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
