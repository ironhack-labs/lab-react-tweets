import Actions from "./Actions"
import Message from "./Message"
import Timestamp from "./Timestamp"
import User from "./User"
import ProfileImage from "./ProfileImage"


function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">

    <ProfileImage  image={props.tweet.user.image} />
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}

      <div className="body">
        <div className="top">
          <span className="user">
          <User user={props.tweet.user.name}/>
            {/* <span className="name">{props.tweet.user.name}</span> */}
            <span className="handle">{props.tweet.user.handle}</span>
          </span>

          <Timestamp timestamp={props.tweet.timestamp}/>
          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
        </div>


        {/* <p className="message">
        {props.tweet.message}
        </p> */}

        <Message message={props.tweet.message}/>
       <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;


