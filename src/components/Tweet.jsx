import ProfileImage from "../components/ProfileImage"
import Actions from "../components/Actions"
import Time from "../components/Timestamp"
import User from "../components/User"
import Msg from "../components/Message"

function Tweet(props) {
  return (
    <div className="tweet">

      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">

          <User userData={props.tweet.user} />
          <Time timer={props.tweet} />

        </div>

        <Msg msg={props.tweet} />

        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
