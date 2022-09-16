function UserData(props) {
  //   console.log("props from User.js:", props);
  return (
    <span className="user">
      <span className="name">{props.userInfo.user.name}</span>
      <span className="handle">{props.userInfo.user.handle}</span>
    </span>
  );
}

export default UserData;
