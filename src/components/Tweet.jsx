import ProfileImage from "./ProfileImage"
import Actions from "./Actions"
import Timestamp from "./Timestamp";
import Message from "./Message"
import User from "./User"


function Tweet(props) {
  console.log("helloooooo", props.tweet.user.image)
  return (
    <div className="tweet">

      <ProfileImage image={props.tweet.user.image}

      //   src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
      //   className="profile"
      //   alt="profile"
      />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <p className="message">
          <Message message={props.tweet.message} />
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>


        <Actions />
      </div>
      
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
