import Actions from './Actions';
import Message from './Message';
import ProfilImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';

/* eslint-disable react/prop-types */
function Tweet( { tweet } ) {
	const { user, message, timestamp } = tweet;
	return (
		<div className="tweet">
			<ProfilImage imageUrl={user.image}/>

			<div className="body">
				<div className="top">
					<User userName={user.name} userHandle={user.handle}/>
					<Timestamp timestamp={timestamp} />
				</div>
				<Message message={message}/>
				<Actions />
			</div>

			<i className="fas fa-ellipsis-h"></i>
		</div>
	);
}

export default Tweet;
