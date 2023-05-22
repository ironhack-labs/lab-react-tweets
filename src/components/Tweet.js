
    /* eslint-disable react/jsx-no-undef */
    import ProfileImage from "../components/ProfileImage";
    import User from "../components/User";
    import Timestamp from "./Timestamp";
    import Message from "./Message";
    import Actions from "./Actions";
    
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
    
              <span className="timestamp">Nov 30, 2020</span>
            </div>
            <User userData={props.tweet.user} />
    
            <Timestamp time={props.tweet.timestamp} />
    
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
            </div>
    
            <Message message={props.tweet.message} /> 
    
            <Actions />
          </div>
    
          <i className="fas fa-ellipsis-h"></i>
        </div>
      );
    }
    export default Tweet;