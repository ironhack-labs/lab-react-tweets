function User(props) {
  return (
    <span className="user">
      <span className="name">{props.userD.name}</span>
      <span className="handle">{props.userD.handle}</span>
    </span>
  );
}

export default User;
