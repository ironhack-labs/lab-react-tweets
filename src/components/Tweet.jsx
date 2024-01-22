import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {

  return (
    <div className="tweet">
     
     <ProfileImage image={props.tweet.user.image}></ProfileImage>

      <div className="body">
        <div className="top">
         <User name={props.tweet.user.name} handle={props.tweet.user.handle} ></User>

          <Timestamp timestamp={props.tweet.timestamp}></Timestamp>
        </div>

        <Message message={props.tweet.message}></Message>

       <Actions></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

