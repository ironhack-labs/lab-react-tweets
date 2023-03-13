function User({ userData }) {
  return (
    <span className="user">
      <span className="name"> USER_NAME </span>
      <span className="handle">@ USER_HANDLE</span>
    </span>
  )
}

User.defaultProps = {
  userData: ""
} 

export default User