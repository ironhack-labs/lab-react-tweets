import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestap";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
    const { user, timestamp, message } = tweet;

    return (
        <div className="tweet">
            <div className="body">
                <div className="top">
                    <ProfileImage image={user.image} />
                    <User name={user.name} handle={user.handle} />
                    <Timestamp time={timestamp} />
                    <Message message={message} />
                    <Actions />
                </div>
            </div>

            <i className="fas fa-ellipsis-h"></i>
        </div>
    );
}

export default Tweet;
