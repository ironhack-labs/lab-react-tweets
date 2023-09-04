import ProfileImage from "./ProfileImage";
import User from "./User"
import Timestamp from "./Timestamp";
import Message from "./Message"
import Actions from "./Actions"

function Tweet(props) {
  console.log(props)
  const {image} = props;
  return (
    <div className="tweet">
       <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
            <span className="user">
            <User userData={props.tweet.user} />
            {/* <span className="handle">{props.tweet.user.handle}</span> */}
            <Timestamp time={props.tweet.timestamp} />
          </span>      
        </div>

        <Message message={props.tweet.message} />  

 
      </div>

      <Actions />
    </div>
  );
}

export default Tweet;
