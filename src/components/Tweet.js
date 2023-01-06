import ProfileImage from "./ProfileImage";
import UserComponent from "./UserComponent";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">
    
      <ProfileImage image={props.tweetsArray.user.image}/>

      <div className="body">
            <div className="top">
                <UserComponent info={props.tweetsArray.user}/>
                <TimeStamp time={props.tweetsArray.timestamp} />
            </div>

        <Message message={props.tweetsArray.message}/>
        <Actions />
        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
