import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp"; 
import Actions from "./Actions"
import Message from "./Message"
//import "./App.css";


function Tweet(props){

console.log(props);
  return (

    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} 
      className="profile"
      alt="profile"/>

      <div className="body">
        
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
     <p className="message" >
        <Message message={props.tweet.message} /> </p>
        <Actions />
       <div className="actions">
        <i className="far fa-comment"> </i>
        <i className="far fa-retweet"> </i>
        <i className="far fa-heart"> </i>
        <i className="far fa-share"> </i>    
      </div>
      </div>
      <i className="fas fa-ellipsis-h"></i>
   
    </div>
  );
}




export default Tweet;
