const User = (props) => {
    return(
        <span className="user">
        <span className="name">{props.userName}</span>
        <span className="handle">@{props.handle}</span>
      </span>
    )
}

export default User;