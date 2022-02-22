import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";

function Tweet(props) {

  console.log("props:", props)

  return (
    <div className="tweet">
    <ProfileImage image={props.tweet.user.image} />
      
      <div className="body">
        <div className="top">

          <User user={props.tweet.user} />
       
          <TimeStamp time={props.tweet.timestamp} />

        </div>

        <Message message={props.tweet.message} /> 

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
