import ProfileImg from './ProfileImg';
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message'
import Actions from './Actions'

function Tweet(props) {
  console.log(props);
  return (
    <div>
      {
        props.tweet.map((element) => {
          return (
            <div className="tweet">
              <ProfileImg url={element.user.image} alt={element.user.name}/>
              <div className="body">
                <div className="top">
                  <User name={element.user.name} handle={element.user.handle} />
                  <Timestamp time={element.timestamp} />
                </div>
                <Message msg={element.message}/>
                <Actions />
              </div>
              <i className="fas fa-ellipsis-h more"></i>
            </div>
          )
        })
      }
    </div>
  );
}

export default Tweet;
