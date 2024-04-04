import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  const {tweet} = props
  return (
    <div className="tweet">
      <ProfileImage img={tweet.user.image} />

      <div className="body">
        <div className="top">
         <User user={tweet.user}/>

          <TimeStamp timeStamp={tweet.timestamp}/>
        </div>

        <Message message={tweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
