import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Action from "./Actions"

function Tweet(props) {
 // console.log(props.tweet.user.name)
 // passing image as a prop to profile image component
  return (
    <div className="tweet">
      <ProfileImage src={props.tweet.user.image}/>

      < div className="body">
        <div className="top">
         
        <User userData={props.tweet.user} />

        <Timestamp time={props.tweet.timestamp}/>
      
        </div>

      <Message message={props.tweet.message}/>

      <Action />
    </div>
    </div>
  );
}

export default Tweet;
