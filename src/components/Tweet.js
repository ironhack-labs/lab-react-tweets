import ProfileImage from "./ProfileImage";
import User from "./User";

function Tweet({ tweet }) {

  console.log('FUNCTION TWEET', tweet.user.name)

  return (
    <div className="tweet">

      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">

          <User userData={tweet.user} />

        </div>

        <p className="message">
          {tweet.message}
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
