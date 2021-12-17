import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet(props) {

  console.log(props) // {tweet: {…}}
  const { tweet } = props
  console.log(tweet)

  return (
    <>
    {tweet.map((elem) => (
        <div className="tweet">
            <ProfileImage image={elem.user.image} />
            <div className="body">
                <div className="top">
                    <User userData={elem.user} />
                    <Timestamp time={elem.timestamp} />
                </div>
                <Message message={elem.message} />
                <Actions />
            </div>

            <i class="fas fa-ellipsis-h"></i>
        </div>
    ))}
</>
  );
}

export default Tweet;
