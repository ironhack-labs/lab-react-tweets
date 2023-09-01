import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';


function Tweet(props) {
  
  return (
    <div className="tweet">
     <ProfileImage profileImage={props.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
          <User name={props.user.name} handle={props.user.handle} />
          </span>

          <span className="timestamp">
            <Timestamp time={props.timestamp} />
          </span>
        </div>

        
          <Message message= { props.message }/>
        

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
