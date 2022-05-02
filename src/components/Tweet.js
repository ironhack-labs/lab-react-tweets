import ProfileImage from './ProfileImage.js'
import User from './User.js'



const Tweet = ({ name, image, handle, timestamp, message }) => {
  return (
    <div className="tweet">
      <ProfileImage image={image}
      />

      <div className="body">
        <div className="top">
          <User name={name}
            handle={handle} />
          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">
          {message}
        </p>

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
