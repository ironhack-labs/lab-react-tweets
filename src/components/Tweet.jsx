import ProfileImage from "./src/Components/ProfileImage";
import User from "./src/Components/User";
import Timestamp from "./src/Components/Timestamp";
import Message from "./src/Components/Message";
import Actions from "./src/Components/Actions";



function Tweet(props) {

  return (
    <div className="tweet">
      <ProfileImage profileImage = {props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User userProp = {props.tweet.user}/>

          <Timestamp time = {props.tweet.timestamp}/>
        </div>

        <Message message = {props.tweet.message}/>

        
      </div>

      <div className="actions">
  <Actions className="far fa-comment" data-testid="comment-icon" />
  <Actions className="fas fa-retweet" data-testid="retweet-icon" />
  <Actions className="far fa-heart" data-testid="heart-icon" />
  <Actions className="fas fa-share" data-testid="share-icon" />
</div>
    </div>
  
  );
}

export default Tweet;