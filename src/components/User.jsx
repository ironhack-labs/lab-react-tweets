

const User = (pizza) => {
    
  return (
    <span className="user">
    <span className="name">{pizza.name}</span>
    <span className="handle">{pizza.handle}</span>
    </span>
  )
}

export default User
