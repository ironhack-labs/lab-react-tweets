import ProfileImage from "../components/ProfileImage";
import User from "../components/User"
import TimeStamp from "../components/TimeStamp"
import Message from "../components/Message"
import Actions from "../components/Actions"

function Tweet(props) {
  console.log(props);
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />


      <div className="body">
        <div className="top">
        <User name={props.tweet.user.name} handle={props.tweet.user.handle}/>

        <TimeStamp timeStamp={props.tweet.timestamp} />
       

        </div>
        <Message message={props.tweet.message}/>

        <Actions />
        

      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
