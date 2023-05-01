import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
{/*           <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}
          {/* wird jetzt ersetzt durch: */}
          <User userData={props.tweet.user}/>

          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
          {/* wird jetzt ersetzt durch: */}
          <Timestamp time={props.tweet.timestamp} />
        </div>

{/*         <p className="message">
         {props.tweet.message}
        </p> */}
        {/* wird jetzt ersetzt durch: */}
        <Message message={props.tweet.message}/>


{/*         <div className="actions">
          Font Awesome icons 
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div> */}
        {/* wird jetzt ersetzt durch: */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
