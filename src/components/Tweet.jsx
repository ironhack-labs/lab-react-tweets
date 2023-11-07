import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";





function Tweet(props) {
  return (
    <div className="tweet">
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
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

          <span className="timestamp">Nov 30, 2020</span>
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>

        <div className="actions">
          Font Awesome icons
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
          <User name={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
