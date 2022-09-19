import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"

function Tweet({ tweet }) {
  // console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', tweet)

  const { message } = tweet
  const { name, image, handle } = tweet.user

  return (
    <div className="tweet">

      <ProfileImage image={image} />

      <div className="body">
        <div className="top">

          <User name={name} />

          <span className="timestamp">Nov 30, 2020</span>
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
