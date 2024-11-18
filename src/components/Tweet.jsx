import ProfileImage from "../components/ProfileImage";
import User from "../components/User.jsx";
import Timestamp from "../components/Timestamp";
import Message from "../components/Message";
import Actions from "../components/Actions";

function Tweet(props) {
  
  const { tweet } = props;

  return (
    <div className="tweet">
         <ProfileImage image={props.tweet.user.image} />
             <div className="body">
               <div className="top">
                 <User user={props.tweet.user} />
               <Timestamp time={props.tweet.timestamp} />
           </div>
         <Message tweet={tweet} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;