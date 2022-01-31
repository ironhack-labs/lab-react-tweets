import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Action from "./Actions";


function Tweet(props) {
  console.log("props", props)
  return (
    <div className="tweet">
      <ProfileImage image={props.user.image} />
      <div className="body">
        <div className="top">
          <User userData={props.user}/>
          <TimeStamp time ={props.timestamp}/>
        </div>

        <Message message = {props.message} />

        <Action/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
