function User(props) {
  return (
    <span className="user">
      <span className="name">{props.user.name}</span>
      <span className="handle">{props.user.handle}</span>
    </span>
  );
}

export default User;
