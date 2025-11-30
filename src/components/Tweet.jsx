

import ProfileImage from "./ProfileImage/ProfileImage.jsx";
import User from "./User/User.jsx";
import Timestamp from "./Timestamp/Timestamp.jsx";
import Message from "./Message/Message.jsx";
import Actions from "./Actions/Actions.jsx";


function Tweet({ tweet }) {
  
  return (
    <div className="tweet">
      <ProfileImage url={ tweet.user.image } />
    
      <div className="body">
        <div className="top">
          <User name={ tweet.user.name } handle={ tweet.user.handle }/>

          <Timestamp timestamp={ tweet.timestamp }/>
        </div>

        <Message msg={ tweet.message } />
        
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
