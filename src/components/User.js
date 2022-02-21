const User = (props) => {
  console.log(props);
  return (
    <>
      <span className="name">{props.userData.name}</span>
      <span className="name">{props.userData.handle}</span>
    </>
  );
};

export default User;
