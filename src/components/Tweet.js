// Iteration 2 - Display the tweet content in the Tweet component
import Timestamp from "./Timestamp";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Actions from "./Action";

// To access the props object we first have to specify it as the parameter of the function component:
function Tweet(props) {
  const {user, timestamp, message} = props.tweet
  return (
    <div className="tweet">
      {/*Render the component*/}
     <ProfileImage image={user.image}/>

      <div className="body">
        <div className="top">
          <User userData={user}/>
         <Timestamp time={timestamp}/>
        </div>

        <Message message={message}/>
        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
