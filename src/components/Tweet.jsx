import Profileimage from "../components/ProfileImage";
import User from "./User";



function Tweet(props) {
  const {tweet} = props
  const {user:{name,image,handle},timestamp,message} = tweet
  return (
    <div className="tweet">
      <Profileimage image={image} />

      <div className="body">
        <div className="top">
        <User name={name} handle={handle} />

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">
          {message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
