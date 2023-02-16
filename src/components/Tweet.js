import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>

            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}
          <User userData={props.tweet.user} />
<Timestamp time={props.tweet.timestamp} />
          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
        </div>

        {/* <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p> */}
        {/* <p className="message">{props.tweet.message}</p> */}
        <Message message={props.tweet.message} />
<Actions />
        {/* <div className="actions">
          Font Awesome icons
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div> */}
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
