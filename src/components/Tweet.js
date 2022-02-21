import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";
import ProfileImage from "./ProfileImage";


function Tweet(p) {
  console.log(p)
  return (
    <div className="tweet">
      <ProfileImage image={p.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={p.tweet.user} />
          </span>

          <Timestamp userData={p.tweet.timestamp} />
        </div>

        <Message userData={p.tweet.message} />
        <Actions />
      </div>


    </div>
  );
}

export default Tweet;