import ProfileImage from "./ProfileImage";

function Tweet(props) {
  console.log("PROPS FROM TWEET");
  console.log(props);
  return (
    <div className="tweet">
      {/* <img src={props.user.image} className="profile" alt="profile" /> */}
      <ProfileImage image={props.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.user.name}</span>
            <span className="handle"> {props.user.handle} </span>
          </span>

          <span className="timestamp">Nov 30, 2020</span>
        </div>

        <p className="message">{props.message}</p>

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
