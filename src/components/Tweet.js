import { Actions } from "./Actions"
import { Message } from "./Message"
import { ProfileImage } from "./ProfileImage"
import { Timestamps } from "./Timestamps"
import { User } from "./User"

function Tweet(props) {
	return (
		<div className="tweet">
			<ProfileImage image={props.tweet.user.image} />
			<div className="body">
				<div className="top">
					<User userData={props.tweet.user} />
					<Timestamps time={props.tweet.timestamp} />
				</div>
				<Message message={props.tweet.message} />
				<Actions />
			</div>

			<i class="fas fa-ellipsis-h"></i>
		</div>
	)
}

export default Tweet
