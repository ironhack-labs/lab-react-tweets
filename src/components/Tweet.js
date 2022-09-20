import Profileimg from "./Profileimg";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  return (
    <div className="tweet">
<Profileimg src={props.tweet.user.image} className="profile" alt="profile"/>

      {/* <img
        src="https://i.imgur.com/9yw1Fyw.jpg"
        className="profile"
        alt="profile"
      /> */}
      <div className="body">
        <div className="top">
        <User name = {props.tweet.user.name} handle = {props.tweet.user.handle}/>
          {/* <span className="user">
            <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span>
          </span> */}
          <Timestamp timestamp = {props.tweet.timestamp}/>
          {/* <span className="timestamp">Nov 30, 2020</span> */}
        </div>
 
        {/* <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p> */}
         <Message message = {props.tweet.message}/>
        <div className="actions">
          {/* Font Awesome icons */}
          {/* <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i> */}
           <Actions/>
        </div>
      </div>
  
      <i className="fas fa-ellipsis-h"></i>
      
    </div>
  );
}

export default Tweet;
