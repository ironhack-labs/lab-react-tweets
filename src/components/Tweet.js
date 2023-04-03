import ProfileImage from "./ProfileImage";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Ironhack</span>
            <span className="handle">@ironhack</span>
          </span>

          <span className="timestamp">Nov 30, 2020</span>
        </div>

        <p className="message">
          {props.tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
      
    </div>
  );
}

export default Tweet;
