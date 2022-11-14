import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  const {tweet} = props;
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />   
      </div>
     {/*  <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">
          {message}
        </p>

        <div className="actions">
          
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i> */}
    </div>
  );
}

export default Tweet;
