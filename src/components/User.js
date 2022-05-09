function User(props){
    return(
        <span className="user">
        <span className="name">{props.userData}</span>
        <span className="handle">@ {props.userData}</span>
      </span>
    )
}

export default User;