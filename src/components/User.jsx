function User(props) {
  return (
    <>
      <span className="name">{props.name}</span>
      <span className="handle">{props.handle}</span>
    </>
  );
}

export default User;
