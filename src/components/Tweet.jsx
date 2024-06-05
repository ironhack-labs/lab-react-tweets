import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <>
      {props.tweet.map((prop, index) => (
        <div key={index} className="tweet">
          <ProfileImage image={prop.user.image} />

          <div className="body">
            <div className="top">
              <User name={prop.user.name} handle={prop.user.handle} />

              <Timestamp time={prop.timestamp} />
            </div>

            <Message message={prop.message} />

            <Actions />
          </div>
        </div>
      ))}

      {/* <div className="body">
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
          {/* Font Awesome icons *}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i> */}
    </>
  );
}

export default Tweet;
