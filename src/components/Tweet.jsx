import Image from "../components/ProfileImage";
import Actions from "../components/Actions";
import Message from "../components/Message";
import TimeStamp from "../components/TimeStamp";
import User from "../components/User";

function Tweet(props) {
  return (
    <div className="tweet">
      <Image image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle}/>

          <TimeStamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
