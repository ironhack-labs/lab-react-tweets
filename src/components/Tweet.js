import Actions from "./Actions";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestap from "./Timestap";
import Message from "./Message";

function Tweet({ tweet }) {
  return (
    <>
      {tweet.map((tweet) => (
        <div className="tweet">
          <ProfileImage image={tweet.user.image} />

          <div className="body">
            <div className="top">
              <User userData={tweet.user} />
              <Timestap time={tweet.timestamp} />
            </div>

            <Message message={tweet.message} />

            <Actions />
          </div>

          <i class="fas fa-ellipsis-h"></i>
        </div>
      ))}
    </>
  );
}

export default Tweet;
