function User(props) {
  return (
    <span className="user">
      <span className="name">{props.username.name}</span>
      <span className="handle">{props.username.handle}</span>
    </span>
  );
}

export default User;
