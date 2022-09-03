import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
	const { tweet } = props;

	return (
		<div className="tweet">
			<ProfileImage image={tweet.user.image} className />

			<div className="body">
				<div className="top">
					<User userData={tweet.user.name} handle={tweet.user.handle} />
					<Timestamp stamps={tweet.timestamp} />
				</div>

				<Message message={tweet.message} />

				<Actions />
			</div>

			<i class="fas fa-ellipsis-h"></i>
		</div>
	);
}

export default Tweet;