import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";

function Tweet(props) {
  console.log("props", props);

  return (
    <div className="tweet">
      <img
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
        className="profile"
        alt="profile"
      />
      <img src={props.tweet.user.image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span>
          </span>

          <span className="timestamp">Nov 30, 2020</span>
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
          <User tweet={props.tweet}></User>
          <Timestamp tweet={props.tweet}></Timestamp>
        </div>
        <Message tweet={props.tweet}></Message>
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
