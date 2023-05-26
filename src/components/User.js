function User({ userData }) {
  console.log("user name and handle comp", userData);
  return (
    <span className="user">
      <span className="name"> { userData.name } </span>
      <span className="handle">@ { userData.handle } </span>
    </span>
  );
}
export default User;
