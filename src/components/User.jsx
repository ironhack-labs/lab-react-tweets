const User = ({userName, userHandle}) => {
    return (
        <span className="user">
            <span className="name">{userName}</span>
            <span className="handle">@{userHandle}</span>
          </span>
    )
}

export default User