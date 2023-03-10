function User({ userData }) {
  return (
    <span className="user">
      <span className="name">{userData.name}</span>
      <span className="handle">{userData.handle}</span>
    </span>
  )
}

User.defaultProps = {
  userData: ''
}

export default User