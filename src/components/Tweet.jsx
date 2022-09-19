import ProfileImage from "./ProfileImage";
import TimeStamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Action from "./Actions";


function Tweet(props) {
  console.log(props);
  return (

    <div className="tweet" >

      <ProfileImage img={props.tweet.user.image} />



      <div className="body">
        <div className="top">

          <User userData={props.tweet.user} />


          <TimeStamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Action />


      </div>

      <i class="fas fa-ellipsis-h"></i>


    </div>
  );
}

export default Tweet;
