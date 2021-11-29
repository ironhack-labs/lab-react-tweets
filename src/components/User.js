function User(props) {
  return (
    <span className="user">
      <span className="name"> {props.data.name} </span>
      <span className="handle"> @{props.data.name} </span>
    </span>
  );
}

export default User;
