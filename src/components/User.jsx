function User({ name, handle }) {
  return (
    <span className="user">
      <span className="name">{name || "user"}</span>
      <span className="handle">{handle || "@user"}</span>
    </span>
  );
}
export default User;
