const User = (props) => {
  console.log("User", props)
  return (
    <div>
      <span className="user">
        <span className="name"> {props.name} </span>
        <span className="handle">{props.handle}</span>
      </span>
    </div>
  );
};

export default User;

//difference is the for reusability !!! 

// const User = (props) => {
//   console.log("User", props)
//   return (
//     <div>
//       <span className="user">
//         <span className="name"> {props.user.name} </span>
//         <span className="handle">{props.user.handle}</span>
//       </span>
//     </div>
//   );
// };

// export default User;