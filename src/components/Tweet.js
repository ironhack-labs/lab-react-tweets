import ProfileImage from "../components/ProfileImage"
import TimeStamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Action from "./Actions";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">

       <User user={props.tweet.user}/>
       
          <TimeStamp time={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message}/>

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
