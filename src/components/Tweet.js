import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {

  const tweet = props.tweet
  const user = props.tweet.user
  console.log(tweet)
  console.log(user)

  return (
    <div className="tweet">
      <ProfileImage tweet={tweet} user={user} />

      <div className="body">
        <div className="top">
          <User user={user} />
          <Timestamp tweet={tweet} />
        </div>
        <Message tweet={tweet} />

        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
