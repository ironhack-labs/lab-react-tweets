import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      {/*       <img src={user.image} className="profile" alt="profile" />
       */}
      <div className="body">
        <div className="top">
          {/*           <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">{user.handle}</span>
          </span> */}
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
          {/* <span className="timestamp">{timestamp}</span> */}
        </div>
        <Message message={props.tweet.message} />
        {/*         <p className="message">{message}</p>
         */}
        {/*         <div className="actions">
          Font Awesome icons
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div> */}
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
