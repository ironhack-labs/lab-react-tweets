import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweets }) {
  return (
    <>
      {tweets.map((tweet) => {
        return (
          <div className="tweet" key={Math.random()}>
            <ProfileImage image={tweet.user.image} />
            <div className="body">
              <div className="top">
                <User name={tweet.user.name} handle={tweet.user.handle} />
                <Timestamp timestamp={tweet.timestamp} />
              </div>
              <Message message={tweet.message} />
              <div className="actions">
                <Actions />
              </div>
            </div>

            <i className="fas fa-ellipsis-h"></i>
          </div>
        );
      })}
    </>
  );
}

export default Tweet;
