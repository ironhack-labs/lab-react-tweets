import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp"
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
 const{user,message,timestamp}=props.tweet
  console.log()
  return (
    <div className="tweet">
      <ProfileImage url={user.image} />

      <div className="body">
        <div className="top">
         <User userData={user}/>
         <Timestamp time={timestamp}/>

          
        </div>

        <Message message={message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
