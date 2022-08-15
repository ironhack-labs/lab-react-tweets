

function User (props) {
    const user = props
    return (
        <span className="user">
        <span className="name">{user.userName}</span>
        <span className="handle">{user.handle}</span>
      </span>
    )
}

export default User