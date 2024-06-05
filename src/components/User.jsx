function User(user) {
  const { handle, name } = user;
  console.log(handle, name);
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

export default User;
