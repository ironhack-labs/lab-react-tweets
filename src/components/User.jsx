function User (prop) {
    return (
        <span className="user">
            <span className="name">{prop.user.name}</span>
            <span className="handle">@{prop.user.handle}</span>
        </span>
    )
}

export default User;