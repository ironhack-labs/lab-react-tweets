import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  const { tweet } = props;
  const { user, timestamp, message } = tweet;
  const { name, image, handle } = user;
  return (
    <section className="tweet mb-3">
      <ProfileImage image={image}/>

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp timestamp={timestamp} /> 
        </div>

        <Message message={message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </section>
  );
}

export default Tweet;
