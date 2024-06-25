function User({userName, handle}) {
    return <span className="user">
    <span className="name">{userName}</span>
    <span className="handle">@{handle}</span>
  </span>
}

export default User;