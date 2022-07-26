import ProfileImage from "./components/ProfileImage";
import User from "./components/User";
import Timestamp from "./components/Timestamp";
import Message from "./components/Message";
import Actions from "Actions";



function Tweet(props) {
  return (
    <div className="tweet">
      <img
        src="https://i.imgur.com/9yw1Fyw.jpg"
        className="profile"
        alt="profile"
      />
       <ProfileImage image={props.tweet.user.image} />


      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span>
          </span>
          <User userData={props.tweet.user} />

          <span className="timestamp">Nov 30, 2020</span>
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
        <Message message={props.tweet.message} /> 

        <Actions />
      
        </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;