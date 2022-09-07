const User = (attribute) => {
    return(
        <span className="user">
            <span className="name">{attribute.userData.name}</span>
            <span className="handle">@{attribute.userData.handle}</span>
        </span>
    )
}
export default User
