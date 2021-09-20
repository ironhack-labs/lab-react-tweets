import React from 'react'

// export default function Tweet(props) {
//   console.log(props.data);
//   console.log(props.data[0]);
//   return (
//       <>
      
//       </>
//   )
// }
function Tweet(props) {
  return (
    <div className="tweet">
      <img
        src={props.data[0].user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
          <span className="name">{props.data[0].user.name}</span>
            <span className="handle">{props.data[0].user.handle}</span>
          </span>

          <span className="timestamp">{props.data[0].timestamp}</span>
        </div>

        <p className="message">
          {props.data[0].message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
