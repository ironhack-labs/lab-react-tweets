import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
    return (
        <div className="tweet">
            <ProfileImage image={tweet.user.image}></ProfileImage>

            <div className=" body">
                <div className=" top">
          <span className=" user">
            <User name={tweet.user.name} handle={tweet.user.handle}></User>
          </span>
                    <Timestamp timestamp={tweet.timestamp}></Timestamp>
                </div>

                <Message message={tweet.message}></Message>

                <Actions></Actions>
            </div>

            <i class=" fas fa-ellipsis-h"></i>
        </div>
    );
}

export default Tweet;
