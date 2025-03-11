const User = (props) => {
  console.log(props);
  return (
    <span className="user">
      <span className="name">{props.name}</span>
      <span className="handle">{props.handle}</span>
    </span>
  );
};

export default User;
