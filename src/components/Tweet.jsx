import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions"

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image= {props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User name={props.tweet.user.name}/>
            <User handle={props.tweet.user.handle}/>
          </span>

         <Timestamp timestamp= {props.tweet.timestamp}/>
        </div>

      <Message message= {props.tweet.message}/>

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions/>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
