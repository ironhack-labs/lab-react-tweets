function User  ({userData}) {
    
    return (
        <span className="user">
        <span className="name">{userData.name}</span>
        <span className="handle">@{userData.handler}</span>
      </span>
    )
}

export default User;