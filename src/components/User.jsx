// function User(props) {
//   return (
//     <>
//       <span className="name">{props.name}</span>
//       <span className="handle">@{props.handle}</span>
//     </>
//   );
// }

// export default User;

function User({ name, handle }) {
  return (
    <>
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </>
  );
}

export default User;
