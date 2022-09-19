// const UserName = ({ name, handle }) => {

//     // console.log(props);

//     return (
//         <>
//             <span className="user">
//                 <span className="name">{name}</span>
//                 <span className="handle">{handle}</span>
//             </span>
//         </>
//     );
// };

// export default UserName;


// function Tweet({ tweet }) {

//     const { user, message, timestamp } = tweet

//     const { image, name, handle } = user

//     return (
//         <div className="tweet">
//             {/* <img
//         src={image}
//         className="profile"
//         alt="profile"
//       /> */}
//             <ProfileImage img={image} />

//             <div className="body">
//                 <div className="top">

//                     <UserName userData={props.tweet.user} />

//                     <span className="timestamp">{timestamp}</span>
//                 </div>

//                 <p className="message">
//                     {message}
//                 </p>

//                 <div className="actions">
//                     {/* Font Awesome icons */}
//                     <i className="far fa-comment"></i>
//                     <i className="fas fa-retweet"></i>
//                     <i className="far fa-heart"></i>
//                     <i className="fas fa-share"></i>
//                 </div>
//             </div>

//             <i className="fas fa-ellipsis-h"></i>
//         </div>
//     );
// }

// export default Tweet;
