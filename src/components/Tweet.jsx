import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";



function Tweet(props) {
  console.log("PROPS", props);
  console.log(props.tweet.user.image);
  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage profileImage={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">
            {props.tweet.user.name}
              
            </span>
            <span className="handle">
              {props.tweet.user.handle}
            </span>
          </span> */}
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
           <Timestamp time={props.tweet.timestamp} />       
        </div>

        {/* <p className="message">{props.tweet.message}</p> */}
        <Message message={props.tweet.message}/>

        <div className="actions">
          {/* Font Awesome icons */}
          {/* <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i> */}
        </div>
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
