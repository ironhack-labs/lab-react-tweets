import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";

function Tweet(props) {
  const { name, image, handle } = props.tweet.user;
  const { timestamp, message } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={image} />
      {/* <img src={image} className="profile" alt="profile" /> */}

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          {/* <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
          </span> */}
          <Timestamp timestamp={timestamp} />
          {/* <span className="timestamp">{timestamp}</span> */}
        </div>

        <Message message={message} />
        {/* <p className="message">{message}</p> */}
        <Actions></Actions>
        {/* <div className="actions">
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
