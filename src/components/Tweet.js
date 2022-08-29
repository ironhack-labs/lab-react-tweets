
import './Tweet.css'

function Tweet({tweet}) {
const  {user, timestamp, message} = tweet 
const {name, image, handled} = user

  return (
    <div className="tweet">
      <img
        src={image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handled}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">
          {message}
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

Tweet.defaultProps ={
  name:'Ironhack',
  image:"https://i.imgur.com/9yw1Fyw.jpg",
  handled: "@ironhack",
  timestamp: "Nov 30, 2020",
  message: 'On December 7th, we will be hosting a #webinar that will introduce you to #SQL! Are you ready? 🚀'
  }

export default Tweet;
