import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {

  return (
    <div className="tweet">
    {/* I EXTRACT THE FOLLOWING IN ProfileImage.jsx.  src={props.tweet.user.image} is a LINK!!*/}
    {/*  <img
        src={props.tweet.user.image} 
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
        {/* I EXTRACT THE FOLLOWING IN User.jsx */}
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">@{props.tweet.user.handle}</span>
          </span> */}

          <User name = {props.tweet.user.name} handle={props.tweet.user.handle} />
          <Timestamp time ={props.tweet.timestamp} />
          
        </div>

        <Message message= {props.tweet.message}/>

        <Actions    />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
