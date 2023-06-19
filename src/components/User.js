function User(props){
    return(
        <>
        <span className="user">
  <span className="name"> {props.userData.user.name} </span>
  <span className="handle">{props.userData.user.handle}</span>
</span>
</>
    );
}

export default User;