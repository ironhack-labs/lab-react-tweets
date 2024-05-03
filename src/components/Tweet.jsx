import ProfileImage from "./src/components/ProfileImage";
import User from "./src/components/User";
import Timestamp from "./src/components/Timestamp";
import Message from "./src/components/Message";
import Actions from "./src/components/Actions";
function Tweet(props) {
  return (
    <div className="tweet">
   
      <ProfileImage tweet = {props.tweet}/>
      
      <div className="body">
        <div className="top">
         
        <User tweet = {props.tweet}/>
        <Timestamp tweet = {props.tweet}/>
        </div>

      <Message tweet = {props.tweet}/>

      <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
