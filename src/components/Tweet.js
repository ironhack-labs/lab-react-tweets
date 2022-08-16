import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  const {tweet} = props;
  return (
    <div className="tweet">
      <ProfileImage img={tweet.user.image} />
    <div className="body">
        <div className="top">
          <span className="user">
            <User userData={tweet.user}/>
          </span>

            <Timestamp timestamp={tweet.timestamp}/>

        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
