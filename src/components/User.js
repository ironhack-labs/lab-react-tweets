function User(props){
    let {userData} = props;
    return(
    <span className="user">
        <span className="name"> {userData.name} </span>
        <span className="handle">{userData.handle}</span>
    </span>
    )
}

export default User;