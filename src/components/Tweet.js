import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <img
        src="https://i.imgur.com/9yw1Fyw.jpg"
        className="profile"
        alt="profile"
      />
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span>
          </span>
          <User user={props.tweet.user} />

          <span className="timestamp">Nov 30, 2020</span>
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
