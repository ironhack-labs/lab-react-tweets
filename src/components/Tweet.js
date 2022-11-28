import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User"
import Message from "./Messages";
import Action from "./Actions";

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <ProfileImage image={tweet.user.image} />

            <div className="top">
                <User userData={tweet.user} />
                <Timestamp time={tweet.timestamp} />
            </div>

            <div className="body">
                <div className="top">
                    <span className="user">
                        <User userData={tweet.user} />
                        <span className="handle">{tweet.user.handle}</span>
                    </span>
                </div>
                <Message message={tweet.message} />
                <Action />

            </div>

            <i className="fas fa-ellipsis-h"></i>
        </div>
    );
}

export default Tweet;
