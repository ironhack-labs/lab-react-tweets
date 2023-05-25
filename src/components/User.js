function User(props) {
    //console.log("props from USER --->", props.userData);
    return (
        <span className="user">
        <span className="name">{props.userData.name}</span>
        <span className="handle">{props.userData.handle}</span>
      </span>
    );
  }
  
  export default User;