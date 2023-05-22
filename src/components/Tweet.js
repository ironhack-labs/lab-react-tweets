import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">
      <ProfileImage img= {props.tweet.user.image}/>

      <div className="body">

        <div className="top">
            <User user= {props.tweet.user}/>

            <Timestamp time={props.tweet.timestamp}/>
        </div>

        <Message message= { props.tweet.message}/>

       
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
