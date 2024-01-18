/* eslint-disable no-unused-vars */
import Image from "../components/Image";
import User from "../components/User";
import Timestamp from "../components/Timestamp";
import Message from "../components/Message";
import Actions from "../components/Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <Image image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name}></User>
          <Timestamp timestamp={props.tweet.timestamp}></Timestamp>
        </div>

        <Message message={props.tweet.message}></Message>
        <Actions></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
