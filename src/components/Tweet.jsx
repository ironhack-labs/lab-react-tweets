import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";



function Tweet(props) {
 /* const { User, Message, Timestamp } = Tweet*/
  return (
    <div className="tweet">
      <ProfileImage image = {props.tweet.user.image}/>

      <div className="body">
        <div className="top">
        <User name={props.tweet.user.name} handle={props.tweet.user.handle} />

          <Timestamp time = {props.tweet.timestamp}/>
        </div>

        <Message message = {props.tweet.message}/>

        
      </div>

      <div className="Actions">
  <Actions className="far fa-comment" data-testid="comment-icon" />
  
</div>
    </div>
  
  );
}

export default Tweet;
