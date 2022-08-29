function User({ user }) {
  return (
    <span className="user">
      <span>{user.name}</span>
      <span>{user.handle}</span>
    </span>
  );
}

export default User;
