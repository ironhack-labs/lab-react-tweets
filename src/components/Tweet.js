import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import User from "./User";


function Tweet({ user, timestamp, message }) {
  return (
    <div className="tweet">
      {/* <img
        src={user.image}
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage user={user} />

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">{user.handle}</span>
          </span> */}

          <User user={user} />


          {/* <span className="timestamp">{timestamp}</span> */}
          <Timestamp timestamp={timestamp} />


        </div>

        {/* <p className="message">
          {message}
        </p> */}

        <Message message={message} />

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
