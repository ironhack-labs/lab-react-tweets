import ProfileImage from "./ProfileImage.jsx"
import User from "./User.jsx"
import TimeStamp from "./Timestamp.jsx"
import Message from "./Message.jsx"
import Actions from "./Actions.jsx"

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />

          <TimeStamp time={props.tweet.timestamp}/>
          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}

        </div>

        {/* <p className="message">
          {props.tweet.message}
        </p> */}

        <Message message={props.tweet.message}/>

        {/* <div className="actions"> */}
          {/* Font Awesome icons */}
          {/* <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div> */}
        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
