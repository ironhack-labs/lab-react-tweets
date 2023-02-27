function User(props) {
  let { userData } = props;

  return (
    <span className="user">
      <span className="handle">{userData.name}</span>
      <span className="name"> {userData.handle} </span>
    </span>
  );
}

export default User;
