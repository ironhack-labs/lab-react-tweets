function User(props) {
  let { userData } = props;
  return (
    <div>
      <span className="user">
        <span>{userData.name}</span>
        <span>{userData.handle}</span>
      </span>
    </div>
  );
}

export default User;

{
  /*<span className="user">
  <span className="name">{name}</span>
  <span className="handle">{handle}</span>
</span>;*/
}
