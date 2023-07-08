function User({ name, profile }) {
  return (
    <div>
      <span className="user">
        <span className="name">{name}</span>
        <span className="handle">{profile}</span>
      </span>
    </div>
  );
}

export default User;
