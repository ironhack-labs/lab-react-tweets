function User(props) {
  return (
    <div>
      <span className="user">
        <span className="name">{props.name}</span>
        <span className="handle">{props.handle}</span>
      </span>
    </div>
  );
}

export default User;
