function User(props) {
  return (
    <span className="user">
      <span className="name">{props.userProfile.name}</span>
      <span className="handle">{props.userProfile.handle}</span>
    </span>
  );
}

export default User;
