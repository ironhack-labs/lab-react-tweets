fimport ProfileImage from "./ProfileImage";
import Message from "./Message";
import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
    <ProfileImage image={tweet.user.image}/>
      <div className="body">
        <div className="top">
        <User name={tweet.user.name} handle={tweet.user.handle} />
        <Timestamp time={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
        <Actions/>
      </div>

    </div>
  );
}

export default Tweet;
