function User(props) {
    console.log(props);
    return(
      <>
        <span className="name">{props.user.name}</span>
        <span className="handle">{props.user.handle}</span>
      </> 
    )
  }
  
  export default User;