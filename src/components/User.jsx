const User = ({ UserName, UserHandler }) => {
  return (
    <span className="user">
      <span className="name">{UserName}</span>
      <span className="handle">@{UserHandler}</span>
    </span>
  );
};
export default User;
