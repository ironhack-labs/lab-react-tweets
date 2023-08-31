
function User({ details }) {
  const { name, handle } = details

  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  )
}

export default User

