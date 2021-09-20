//importing components
import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
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

			<i class="fas fa-ellipsis-h" />
		</div>
	);
}

export default Tweet;

//----------------------------------------------------------------
// function Tweet() {
//   return (
//     <div className="tweet">
//       <img
//         src="https://i.imgur.com/9yw1Fyw.jpg"
//         className="profile"
//         alt="profile"
//       />

//       <div className="body">
//         <div className="top">
//           <span className="user">
//             <span className="name">Ironhack</span>
//             <span className="handle">@ironhack</span>
//           </span>

//           <span className="timestamp">Nov 30, 2020</span>
//         </div>

//         <p className="message">
//           On December 7th, we will be hosting a #webinar that will introduce you
//           to #SQL! Are you ready? 🚀
//         </p>

//         <div className="actions">
//           {/* Font Awesome icons */}
//           <i class="far fa-comment"></i>
//           <i class="fas fa-retweet"></i>
//           <i class="far fa-heart"></i>
//           <i class="fas fa-share"></i>
//         </div>
//       </div>

//       <i class="fas fa-ellipsis-h"></i>
//     </div>
//   );
// }

// export default Tweet;
