import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const tweet = props.tweet;
  console.log(tweet)
  
  
  return (
    <div className="tweets-list">
    <div className="tweet">
      <ProfileImage image={tweet[0].user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User user = {tweet[0].user}/>
          </span>

          <Timestamp timestamp={tweet[0].timestamp}/>
        </div>

        <Message message={tweet[0].message}/>

        <Actions/>
      </div>
    
      
      </div>

      <div className="tweet">
      <ProfileImage image={tweet[1].user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User user = {tweet[1].user}/>
          </span>

          <Timestamp timestamp={tweet[1].timestamp}/>
        </div>

        <Message message={tweet[1].message}/>

        <Actions/>
      </div>
    
      
      </div>

      <div className="tweet">
      <ProfileImage image={tweet[2].user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User user = {tweet[2].user}/>
          </span>

          <Timestamp timestamp={tweet[2].timestamp}/>
        </div>

        <Message message={tweet[2].message}/>

        <Actions/>
      </div>
    
      
      </div>

      
    </div>
  );
}

export default Tweet;
