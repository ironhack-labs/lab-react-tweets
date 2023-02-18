const User = ({ user }) => {
  console.log(user);
  return (
    <span className="user">
      <span className="name">{user.name}</span>
      <span className="handle">{user.handle}</span>
    </span>
  );
};

export default User;

// without destructuring
// const User = (props) => {
//   console.log(props);
//   return (
//     <span className="user">
//       <span className="name">{props.user.name}</span>
//       <span className="handle">{props.user.handle}</span>
//     </span>
//   );
// };

// export default User;
