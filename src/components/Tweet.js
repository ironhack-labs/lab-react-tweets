
//Importaciones
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";



function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image= {props.tweet.user.image}/>
      

      <div className="body">
        <div className="top">

        
            <User user={props.tweet.user}/>
            <Timestamp time={props.tweet.Timestamp} />

        </div>

        <p className="message">{props.tweet.message} </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>

      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
