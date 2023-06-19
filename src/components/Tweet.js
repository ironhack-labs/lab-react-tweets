import Actions from './Actions';
import ProfileImage from './ProfileImage';
import User from './User';

function Tweet(props) {
	return (
		<div className="tweet">
			<ProfileImage image={props.tweet.user.image} />
			<div className="body">
				<div className="top">
					<User userData={props.tweet.user} />

					<span className="timestamp">{props.tweet.timestamp}</span>
				</div>

				<p className="message">{props.tweet.message}</p>

				<Actions />
			</div>

			<i className="fas fa-ellipsis-h"></i>
		</div>
	);
}

export default Tweet;
