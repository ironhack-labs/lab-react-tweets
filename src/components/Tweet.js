import Actions from './Actions';
import ProfileImage from './ProfileImage';

function Tweet(props) {
	return (
		<div className="tweet">
			<ProfileImage image={props.tweet.user.image} />
			<div className="body">
				<div className="top">
					<span className="user">
						<span className="name">{props.tweet.user.name}</span>
						<span className="handle">{props.tweet.user.handle}</span>
					</span>

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
