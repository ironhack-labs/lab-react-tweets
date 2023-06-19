import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
	console.log(props);
	return (
		<div className="tweet">
			<ProfileImage image={props.tweet.user.image} />

			<div className="body">
				<div className="top">
					<User userData={props.tweet.user} />
					<Timestamp time={props.tweet.timestamp} />
				</div>

				<Message message={props.tweet.message} />

				<Actions />
			</div>
		</div>
	);
}

export default Tweet;
