import Message from "./Message";
import Img from "./ProfilePic"
import Time from "./Timestamp"
import User from "./User"
import Actions from "./Action"
function Tweet(input) {
  console.log(input.tweet.message)
  console.log("hello")
  return (
    <div className="tweet">
     <Img src={input.tweet.user.image}/>

    <div className="body">
       <div className="top">
         <User user={input.tweet.user} />
         <Time timestamp={input.tweet.timestamp} />
       </div>
       <Message message={input.tweet.message}/>
       <Actions />

        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
