import ProfileImage from "./ProfileImage.jsx";
import Timestamp from "./Timestamp.jsx";
import User from "./User.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";

// the code below would display only tweet from 1 item, the tweetsArray[0]
//only in iteration 9 we make it dinamic with a loop for all elements in the array
//we change in app.jsx to tweet={tweetsArray}
//and add a loop here to iterate through elements

function Tweet(props) {
  return (
    <>
      {props.tweet.map((prop, index) => (
        <div key={index} className="tweet">
          <ProfileImage image={prop.user.image} />

          <div className="body">
            <div className="top">
              <User name={prop.user.name} handle={prop.user.handle} />

              <Timestamp time={prop.timestamp} />
            </div>

            <Message message={prop.message} />

            <Actions />
          </div>
        </div>
      ))}
    </>
  );
}
export default Tweet;

// this is the code for only one item tweet={tweetsArray[0]}
//{/* <div className="tweet">
// {props.tweet.map((prop,index) => {

// })}
// {/* <img src={tweet.user.image} className="profile" alt="profile" /> */}
// <ProfileImage image={tweet.user.image} />
// <div className="body">
//   <div className="top">
//     <User name={tweet.user.name} handle={tweet.user.handle} />
//     <Timestamp time={tweet.timestamp} />
//   </div> */}
// {/*
//         {/* <p className="message">{tweet.message}</p> */}
//         <Message message={tweet.message} />
//         <Actions />
//       </div>
//       <i className="fas fa-ellipsis-h"></i>
//       {/* this is just the 3 dots icon on the right */}
//     </div>
//   ); */}
