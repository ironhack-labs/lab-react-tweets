import Image from "./image";
import User from "./user";
import Timestamps from "./timestamps";
import Message from "./message";
import Actions from "./actions";

function Tweet(props) {
  const {image} = props.tweet.user
  const {message, timestamp} = props.tweet
  return (
    <div className="tweet">
      <Image picture={image}/> 
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user}/>
          <Timestamps timestmp={timestamp}/>
        </div>
        <Message msg={message}/>
        <Actions/>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
