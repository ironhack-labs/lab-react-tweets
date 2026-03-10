import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
	const { user, message, timestamp } = tweet;

	return (
		<div className="tweet">
			<ProfileImage image={user.image} />

			<div className="body">
				<div className="top">
					<User name={user.name} handle={user.handle} />
					<Timestamp time={timestamp} />
				</div>

				<Message message={message} />

				<Actions />
			</div>
		</div>
	);
}

export default Tweet;
