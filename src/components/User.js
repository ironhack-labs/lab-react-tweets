function User(userData) {
  return (
    <div>
      <span name="userData">{userData.name}</span>
      <span name="userData"> {userData.handle}</span>
    </div>
  );
}

User.defaultProps = {
  userData: ''
}

export default User;