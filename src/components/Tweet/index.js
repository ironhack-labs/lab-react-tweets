

import { User, ProfileImage, Timestamp, Message, Actions } from '../index';

function Tweet(props) {
  const { user, profileImage, timestamp, message, actions } = props.tweet
  return (
    <div className="tweet">
      
      <ProfileImage image= { profileImage }/>

      <div className="body">

        <div className="top">
          <User user={user} />
          <Timestamp time={timestamp}/>
        </div>

        <Message message={message}/>
        <Actions actions={actions}/>

      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
