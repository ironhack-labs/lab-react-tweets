import React from 'react';
import ProfileImage from './ProfileImage/ProfileImage';
import User from './User/User';
import Timestamp from './Timestamp/Timestamp';
import Message from './Message/Message';
import Actions from './Actions/Actions'; 



function Tweet(props) {
  const {tweet} = props;

  return (
        
    <div className="tweet">
        <ProfileImage image={tweet.user.image} />
      
        <div className="body">
        <div className="top">
          
        <User name={tweet.user.name}  handle={tweet.user.handle}/>    
          
           
        <Timestamp timestamp={tweet.timestamp} />

        </div>
        
        <Message message={tweet.message} />
      
        <Actions />
      
        <i class="fas fa-ellipsis-h"> </i>
        </div>

      </div>
    
    
  );
}

export default Tweet;
