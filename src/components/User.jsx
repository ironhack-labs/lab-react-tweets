function User(prop) {
  return (
    <div>
      <span className="user">
        <span className="name">{prop.name}</span>
        <span className="handle">{prop.handle}</span>
      </span>
    </div>
  );
}

export default User;
