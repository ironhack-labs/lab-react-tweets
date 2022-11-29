const User = props => {
  const { userData } = props;
  const { name, handle } = userData;
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  );
}

export default User;