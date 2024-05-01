import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweets}) {
  
  return (
    <div className="tweet">
      <ProfileImage image={tweets.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
          <User name={tweets.user.name} handle={tweets.user.handle} />
            {/* <span className="name">{tweets.user.name}</span>
            <span className="handle">{tweets.user.handle}</span> */}
          </span>

          <Timestamp time={tweets.timestamp} />
        </div>

        <p className="message">
          <Message message={tweets.message} />
        </p>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
