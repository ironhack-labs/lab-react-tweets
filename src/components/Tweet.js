import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img
        src="https://i.imgur.com/b0EdHVV.jpg"
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          {/* <span className="user">
            <span className="name">"Thoughts of Dog®"</span>
            <span className="handle">dog_feelings</span>
          </span> */}

          {/* <span className="timestamp">1h ago</span> */}
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <p className="message">
          the human likes to say. that i live here rent free. but i would argue.
          this housing accommodation. is my payment. for a lifetime of love. and
          excellent company
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
