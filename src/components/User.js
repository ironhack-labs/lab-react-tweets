export default function User(userData) {
  return (
    <span className="user">
        <span className="name">{userData.user.name}</span>
        <span className="handle">{userData.user.handle}</span>
    </span>
  )
}

