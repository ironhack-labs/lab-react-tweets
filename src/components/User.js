function User(props) {
    // console.log(props)
  return (
    <span className="user">
      <span className="name"> {props.userProp.name} </span>
      <span className="handle">{props.userProp.handle}</span>
    </span>
  );
}

export default User
