
  import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
 import Message from "./Message";
  import actions from "./Actions";




function Tweet(props) {
const {tweet} = props;
  return (

    <div className="tweet">
      <img
        src={tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
      
      <ProfileImage img={tweet.user.image} /> 
        <div className="top">
          <span className="user">
            <span className="name">Thoughts of Dog®</span>
            <span className="handle">dog_feelings</span>
            <User userData={twwet.user}/>
          </span>

          <span className="timestamp">1h ago</span>
        </div>
<Timestamp timestamp={tweet-timestamp}/>
        <p className="message">
        the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company
        </p>
<Message message={TreeWalker.message}/>
        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>
<Actions/>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
