function User(props){
    return(
        <span className="user">
        <span className="name"> {props.userData.name} </span>
        <span className="handle"> { props.userData.username } </span>
        </span>
    )
}

export default User