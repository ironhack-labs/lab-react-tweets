function UserComponent (props) {
    return (
        <span className="user">
        <span className="name">{props.userName}</span>
        <span className="handle">@{props.userHandle}</span>
      </span>
    )
}

export default UserComponent;