import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweets }) {
  return (
    <>
      {tweets.map((tweet, tweetIdx) => (
        <div className="tweet" key={tweetIdx}>
          <ProfileImage image={tweet.user.image} />
          <div className="body">
            <div className="top">
              <User userData={tweet.user} />
              <Timestamp time={tweet.timestamp} />
            </div>

            <Message message={tweet.message} />

            <Actions />
          </div>

          <i className="fas fa-ellipsis-h"></i>
        </div>
      ))}
    </>
  );
}

export default Tweet;
