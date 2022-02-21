function User(props){
    return(
        <span className = "user">
            <span className="name">{props.userName.name}</span>,
            <span className="handle">@{props.userName.handle}</span>
        </span>
    )
}
export default User;

