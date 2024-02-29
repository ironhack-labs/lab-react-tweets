

function User(props) {
    const name = props.name
    const handle = props.handle
  return (
    <span className="user">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
          </span>
  )
}

export default User