function User(props) {
  const { user_name, user_handle } = props;
  return (
    <span className="user">
      <span className="name"> {user_name} </span>
      <span className="handle">@ {user_handle}</span>
    </span>
  );
}

export default User;
