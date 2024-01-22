import ProfileImage from "./ProfileImage.jsx";
import Timestamp from "./Timestamp.jsx";
import User from "./User.jsx"
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";

function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle}></User>
          <Timestamp time={props.tweet.timestamp}></Timestamp>
          
        </div>

          <Message message={props.tweet.message}></Message>
          <Actions></Actions>

       
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

/* on ProfileImage props {image: https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png}!!! */
/* image is the key */

export default Tweet;
