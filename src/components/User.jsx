function User(props) {
    const { user } = props;
    return (
        <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">@{user.handle}</span>
        </span>
    )

}
export default User;