
import './Tweet.css'
import ProfileImage from '../ProfileImage/ProfileImage';
import Actions from '../Actions/Actions';
import Message from '../Message/Message';
import Timestamp from '../Timestamp/Timestamp';
import User from '../User/User';
function Tweet({tweet}) {
  
    return (
      <div className="tweet">
        <ProfileImage image={tweet.user.image} />
        <div className="body">
          <div className="top">
          <User userData={tweet.user} />
            <Timestamp timestamp={tweet.timestamp} />
          </div>
  
          <Message message={tweet.message}/>
          <Actions/>

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
  