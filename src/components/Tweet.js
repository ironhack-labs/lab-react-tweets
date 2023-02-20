import User from "./User";

import ProfileImage from "./ProfileImage";

import Message from "./Message";

function Tweet(props) {
  return (
    <div className="tweet">
     <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
      

          <span className="timestamp">{props.tweet.timestamp}</span>
        </div>

        <Message message={props.tweet.message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
