import Actions from './Actions';
import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Messages from './Messages';

function Tweet(props) {
	return (
		<div className="tweet">
			<ProfileImage image={props.tweet.user.image} />
			<div className="body">
				<div className="top">
					<User userData={props.tweet.user} />

					<Timestamp time={props.tweet.timestamp} />
				</div>

				<Messages message={props.tweet.message} />
				<Actions />
			</div>

			<i className="fas fa-ellipsis-h"></i>
		</div>
	);
}

export default Tweet;
